'use strict';

const greet = require('./lib/greet.js');
const math = require('./lib/arithmetic.js');
console.log(greet('JOHN'));
console.log(math.add([1,3,4])); // 8
console.log(math.subtract([1,3,4])); // -8
console.log(math.multiply([1,3,4])); // 12
console.log(math.divide(4,2)); //2