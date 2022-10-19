// import fs from 'fs';

import chai from 'chai';

import { CucumberDictionary } from '../src/step-dictionary';

chai.should();
const path = './';
describe('StepDictionary', function () {
  it('should accept a single file path', function () {
    const stepDict = new CucumberDictionary();
    console.log(stepDict.setup('../test'));
    console.log(stepDict.getStepsJson());
    // return stepDict.getStepsJson().should.have.lengthOf(5);
  });

  // it('should accept an array of paths', function () {
  //   var stepDict = CucumberDictionary.setup(path);
  //   return stepDict.getStepsJson().should.have.lengthOf(8);
  // });
});

// describe('StepDictionary.getStepsJson()', function () {
//   it('should output the expected metadata', function () {
//     var stepDict = new StepDictionary('./test')
//     var stepData = stepDict.getStepsJson()[0]

//     stepData.should.have.property('file')
//     stepData.should.have.property('regex')
//     stepData.should.have.property('keyword')
//     stepData.should.have.property('params')
//     stepData.should.have.property('line')
//   })
// })

// describe('StepDictionary.outputReport()', function () {
//   it('should create a report file', function () {
//     var stepDict = new StepDictionary('./test')
//     stepDict.outputReport('output.html')
//     try {
//       return fs.readFileSync('output.html', { encoding: 'utf8' }).should.not.be
//         .undefined
//     } catch (e) {
//       return false
//     }
//   })
// })

// describe('StepDictionary.getStepThatMatches()', function () {
//   it('should return the step that matches the phrase', function () {
//     var stepDict = new StepDictionary('./test')
//     return stepDict
//       .getStepThatMatches('Sam must right 5 wrongs of traditions ignored')
//       .should.have.lengthOf(1)
//   })
// })
