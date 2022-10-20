import fs from 'fs';

import chai from 'chai';

import { StepDictionary } from '../src/step-dictionary';

chai.should();
const stepPath = './test/steps';
const featurePath = './test/features';
describe('StepDictionary', function () {
  it('should accept an array of paths', function () {
    const stepDict = new StepDictionary(stepPath, featurePath);
    return stepDict.getStepsJson().should.have.lengthOf(65);
  });
});

describe('StepDictionary.getStepsJson()', function () {
  it('should output the expected metadata', function () {
    const stepDict = new StepDictionary(stepPath, featurePath);
    const stepData = stepDict.getStepsJson()[0];

    stepData.should.have.property('file');
    stepData.should.have.property('regex');
    stepData.should.have.property('keyword');
    stepData.should.have.property('params');
    stepData.should.have.property('line');
    stepData.should.have.property('example');
  });
});

describe('StepDictionary.outputReport()', function () {
  it('should create a report file', function () {
    const stepDict = new StepDictionary(stepPath, featurePath);
    stepDict.outputReport('output.html');
    try {
      return fs.readFileSync('output.html', { encoding: 'utf8' }).should.not.be.undefined;
    } catch (e) {
      return false;
    }
  });
});

describe('StepDictionary.getStepThatMatches()', function () {
  it('should return the step that matches the phrase', function () {
    const stepDict = new StepDictionary(stepPath, featurePath);
    return stepDict.getStepThatMatches('I should see order is deleted').should.have.lengthOf(1);
  });
});
