const _ = require('lodash');

const sum = (a, b) => a + b;

const currSum = _.curry(sum);

console.log(currSum(1)(2));