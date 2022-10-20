import path from 'path';
import fs from 'fs';

import _ from 'lodash';
import glob from 'glob';

import generateReport from './generate-report';

class StepDictionary {
  private paths;
  private stepDefinitions;
  private featureFiles;
  private stepExamples;

  constructor(stepsPath: string, featurePath: string = stepsPath) {
    this.paths = this._getStepsPaths(stepsPath);
    this.featureFiles = this._getFeaturePaths(featurePath);
    this.stepExamples = this._getStepExamples().join(' ');
    this.stepDefinitions = this._getStepDefinitions();
  }

  getStepsJson() {
    return this.stepDefinitions;
  }

  getFeatureJson() {
    return this.stepExamples;
  }

  getStepThatMatches(phrase) {
    return this.stepDefinitions.filter(function (stepDef) {
      return stepDef.regex.test(phrase);
    });
  }

  outputReport(outputPath) {
    const report = generateReport(this.stepDefinitions);
    fs.writeFileSync(outputPath, report);
  }

  _getStepExamples() {
    const examples = [];

    this.featureFiles.forEach(file => {
      let fileData;

      try {
        fileData = fs.readFileSync(file, { encoding: 'utf8' });
      } catch (e) {
        console.log(path + ' could not be read, will skip and continue', e);
      }
      if (fileData) {
        const arr = fileData.match(/(Then|When|Given|After|And).*[\s\S]?.*?/g);
        const x = new Set(arr);
        const examplesMatches = [...x];
        if (examplesMatches) {
          examplesMatches.forEach(example => {
            examples.push(example);
          });
        }
      }
    });
    return examples;
  }

  _getStepDefinitions() {
    const stepDefs = [];

    this.paths.forEach(file => {
      let fileData;

      try {
        fileData = fs.readFileSync(file, { encoding: 'utf8' });
      } catch (e) {
        console.log(path + ' could not be read, will skip and continue', e);
      }
      if (fileData) {
        const arr1 = fileData.match(/(Then|When|Given|After)[\s\S]*?.*async[\s\S]*?\(.*\)/g);
        const arr2 = fileData.match(/(Then|When|Given|After)[\s\S]*?.*async function[\s\S]*?\(.*\)/g);
        const arr3 = fileData.match(/(Then|When|Given|After)[\s\S]*?.*function[\s\S]*?\(.*\)/g);
        const x = new Set([...arr1, ...arr2, ...arr3]);
        const stepDefinitionMatches = [...x];
        if (stepDefinitionMatches) {
          stepDefinitionMatches.forEach(stepDefinition => {
            const stepRegex = stepDefinition.match(/\/.*\//)[0];
            const line = fileData.substring(0, fileData.indexOf(stepRegex)).split('\n').length;
            const keyword = stepDefinition.substring(0, stepDefinition.indexOf('('));
            const regex = new RegExp(stepRegex.substring(1, stepRegex.length - 1));
            const params = stepDefinition.match(/(async|function|async function)\s?(\([\s\S]*?\))/)[2];
            const r = new RegExp(
              stepRegex
                .substring(1, stepRegex.length - 1)
                .replace(/\^/, '')
                .replace(/\$/, '')
            );
            const example = this.stepExamples.match(r);
            stepDefs.push({
              regex,
              keyword,
              params,
              file,
              line,
              example: example ? example[0] : '-',
            });
          });
        }
      }
    });
    return stepDefs;
  }

  _getStepsPaths(pathArg) {
    const paths = typeof pathArg === 'string' ? [pathArg] : pathArg;
    return _.flattenDeep(
      paths.map(filePath => {
        if (path.parse(filePath).ext) {
          return path.resolve(filePath);
        } else {
          return glob.sync(path.join(filePath, '**', '*.ts'));
        }
      })
    );
  }
  _getFeaturePaths(pathArg) {
    const paths = typeof pathArg === 'string' ? [pathArg] : pathArg;
    return _.flattenDeep(
      paths.map(filePath => {
        if (path.parse(filePath).ext) {
          return path.resolve(filePath);
        } else {
          return glob.sync(path.join(filePath, '**', '*.feature'));
        }
      })
    );
  }
}

export { StepDictionary };
