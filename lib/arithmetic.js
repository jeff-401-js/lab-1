'use strict';

let arithmetic = module.exports = {};


arithmetic.add = function(arr) {
  
  let sum = 0;
  arr.forEach(element => {
    if( typeof element !== 'number') { 
      sum = null;
      return; 
    }
    sum += element;
  });
  return sum;
};

arithmetic.subtract = function (arr) {
  let sum = 0;
  arr.forEach((element, idx) => {
    if( typeof element !== 'number') { 
      sum = null; 
      return;
    }
    if(idx === 0){
      sum = element;
    }else{
      sum -= element;
    }
  });
  return sum;
};

arithmetic.multiply = function (arr) {
  let sum = 1;
  arr.forEach(element => {
    if( typeof element !== 'number') { 
      sum = null;
      return; 
    }
    sum *= element;
  });
  return sum;
};

arithmetic.divide = function (a, b) {
  if( typeof a !== 'number' || typeof b !== 'number' || a === 0 || b === 0) { return null; }
  return a/b;
};

