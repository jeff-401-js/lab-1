'use strict';

const faker = require('faker');

const arithmetic = require('../lib/arithmetic.js');
const greet = require('../lib/greet.js');

describe('Arithmetic Module', () => {
  let a = faker.random.number();
  console.log(a);
  let b = faker.random.number();
  console.log(b);
  let c = faker.random.number();
  console.log(c);
  let d = faker.random.word();
  console.log(d);
  let e = faker.random.word();
  let test = [a, b, c];

  it('add should not take a string', () => {
    expect(arithmetic.add([d, e])).toBeNull();
  });

  it('add should add', () => {
    expect(arithmetic.add(test)).toEqual(a+b+c);
  });

  it('subtract should subtract', () => {
    expect(arithmetic.subtract(test)).toEqual((a-b-c));
  });

  it('multiply should multiply', () => {
    expect(arithmetic.multiply(test)).toEqual((a*b*c));
  });

  it('divide should divide', () => {

    expect(arithmetic.divide(a, b)).toEqual((a/b));
  });
});