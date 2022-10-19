import path from 'path';
import fs from 'fs';

import _ from 'lodash';
import glob from 'glob';

import generateReport from './generate-report';

class CucumberDictionary {
  private paths: string[];
  private stepDefinitions: any;

  setup(pathArg: string) {
    this.paths = this._getAllPaths(pathArg);
    this.stepDefinitions = this._getStepDefinitions();
    this.outputReport('@src');
  }

  getStepsJson() {
    return this.stepDefinitions;
  }

  getStepThatMatches(phrase: any) {
    return this.stepDefinitions.filter(function (stepDef: { regex: { test: (arg0: any) => any } }) {
      return stepDef.regex.test(phrase);
    });
  }

  outputReport(outputPath: fs.PathOrFileDescriptor) {
    const report = generateReport(this.stepDefinitions);
    fs.writeFileSync(outputPath, report);
  }

  _getStepDefinitions() {
    const x = [];
    this.paths.forEach((filePath: fs.PathOrFileDescriptor) => {
      let fileData: string;
      try {
        fileData = fs.readFileSync(filePath, { encoding: 'utf8' });
      } catch (e) {
        console.log(path + ' could not be read, will skip and continue', e);
      }
      if (fileData) {
        const stepDefinitionMatches = fileData.match(/(Then|When|Given).*function\s?\(.*\)/g);
        if (stepDefinitionMatches) {
          stepDefinitionMatches.forEach(stepDefinition => {
            const stepRegex = stepDefinition.match(/\/.*\//)[0];
            const lineNumber = fileData.substring(0, fileData.indexOf(stepRegex)).split('\n').length;
            const keyword = stepDefinition.substring(5, stepDefinition.indexOf('('));
            const regex = new RegExp(stepRegex.substring(1, stepRegex.length - 1));
            x.push({
              regex: regex,
              keyword: keyword,
              params: stepDefinition.match(/function\s?\(.*\)/)[0].match(/\(.*\)/)[0],
              file: filePath,
              line: lineNumber,
            });
          });
        }
      }
    });
    return x;
  }

  _getAllPaths(pathArg: any) {
    const paths = typeof pathArg === 'string' ? [pathArg] : pathArg;
    const pth = _.flattenDeep(
      paths.map((filePath: string) => {
        if (path.parse(filePath).ext) {
          return path.resolve(filePath);
        } else {
          return glob.sync(path.join(filePath, '**', '*.ts'));
        }
      })
    );
    this.paths = pth;
    return pth;
  }
}

export { CucumberDictionary };
