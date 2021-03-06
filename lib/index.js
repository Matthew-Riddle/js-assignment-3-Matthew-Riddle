'use strict';

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _lib = require('./lib');

var lib = _interopRequireWildcard(_lib);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// TODO read in the file createPrompt.json, run the object read in through createPrompt,
// pass the result of createPrompt to chooseRandom, and then save the result to
// cp_solutions.json

// TODO import readFile, writeFile, chooseRandom, createPrompt, and createQuestions
_fs2.default.readFile('./lib/createPrompt.json', 'utf8', (err, data) => {
  if (err) {
    return console.log(err);
  }
  let rightVar;
  _fs2.default.writeFile('cp_solutions.json', JSON.stringify(lib.chooseRandom(lib.createPrompt(JSON.parse(data)))), err => {
    if (err) {
      console.log(err);
    }
    console.log('File saved!');
  });
});

// TODO read the file createQuestions.json. Pass the read in object to createQuestions,
// pass its result to chooseRandom, and then save the final result to cq_solutions.json

lib.readFile('./lib/createQuestions.json').then(data => lib.createQuestions(JSON.parse(data))).then(data => lib.chooseRandom(data)).then(data => lib.writeFile('cq_solutions.json', data));

// lib.createQuestions({
//   'question-1': "Do you think you're ready for this?",
//   'question-1-choice-1': 'Beyond ready!!!',
//   'question-1-choice-2': 'Totally!',
//   'question-2': 'Are you loving JS yet?',
//   'question-2-choice-1': "It's tubular!",
//   'question-2-choice-2': 'Way rad man!'
// })