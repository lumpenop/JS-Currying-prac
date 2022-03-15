// function curry(f) {
//     return function(a) {
//         return function(b) {
//            return f(a, b);
//         };
//     };
// }

const curry = f => a => b => f(a, b);

const sum = (a, b) => a + b;

const currSum = curry(sum);

console.log(currSum(1)(2));