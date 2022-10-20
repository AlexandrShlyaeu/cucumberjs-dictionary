# step-dictionary

##### step-dictionary is a utility to aid the in the discoverability of cucumber-js step definitions. #####
It is a lightweight module, consisting of a StepDictionary class that is instantiated with a given set of paths (likely your `--require` path(s), or your `features` directory). For example:
```
const StepDictionary = require('step-dictionary');
const myDict = new StepDictionary('/path/to/spep/files','/path/to/feature/files');
```
 It exposes three functions:
- `myDict.getStepsJson()` : returns an object of all step definitons and metadata about them
- `myDict.getStepThatMatches(phrase)` : Given a phrase, returns the step definition that matches that phrase
- `myDict.outputReport(path)` : Creates an HTML report of the step definitions found.

**Example of the report output and filtering:**

![report filtering](http://i.giphy.com/uJBjBeO4diQ3S.gif)

