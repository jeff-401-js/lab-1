'use strict';

const faker = require('faker');

const arithmetic = require('../lib/arithmetic.js');

describe('Arithmetic Module', () => {

  let a = faker.random.number();
  let b = faker.random.number();
  let c = faker.random.number();

  let d = faker.random.word();
  let e = faker.random.word();

  let test = [a, b, c];

  it('add should add', () => {
    expect(arithmetic.add(test)).toEqual(a+b+c);
  });
  it('add should not take a string', () => {
    expect(arithmetic.add([d, e])).toBeNull();
  });

  it('subtract should subtract', () => {
    expect(arithmetic.subtract(test)).toEqual((a-b-c));
  });
  it('subtract should not take a string', () => {
    expect(arithmetic.subtract([d, e])).toBeNull();
  });

  it('multiply should multiply', () => {
    expect(arithmetic.multiply(test)).toEqual((a*b*c));
  });
  it('multiply should not take a string', () => {
    expect(arithmetic.multiply([d, e])).toBeNull();
  });

  it('divide should divide', () => {
    expect(arithmetic.divide(a, b)).toEqual((a/b));
  });
  it('divide should not take a string', () => {
    expect(arithmetic.divide(d, e)).toBeNull();
  });
});

