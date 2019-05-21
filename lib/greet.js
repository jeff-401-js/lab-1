'use strict';

let greet = module.exports = function(str) {
  if( typeof str !== 'string') { return null; }

  return `hello, ${str}`;
};
console.log(greet);  //console.log strictly to pass travis