'use strict';

const faker = require('faker');

const greet = require('../lib/greet.js');

describe('Greet Module', () => {

  let a = faker.random.number();

  let d = faker.random.word();

  it('greet should return hello, (whatever word is passed in)', () => {
    expect(greet(d)).toEqual((`hello, ${d}`));
  });
  it('greet should return hello, world', () => {
    expect(greet('world')).toEqual((`hello, world`));
  });
  it('greet should return null if its a number', () => {
    expect(greet(a)).toBeNull();
  });
});