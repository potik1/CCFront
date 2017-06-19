/**
 * Created by Ela Synowiec on 14/6/17.
 */

const ccft2 = require('./CCFrontTask2');
const assert = require('assert');

const badSpell1 = 'jejeai';
const badSpell2 = 'dadsafeokokh';
const badSpell3 = 'aioocofs';
const badSpell4 = 'fefeaioocofsai';
const badSpell5 = 'fefefefefeaiaiaiai';
const badSpell6 = 'dadsafeokokok';
const badSpell7 = 'aieoeofe';
const badSpell8 = 'xxfefeai';

const goodSpell1 = 'jejefeai';
const goodSpell2 = 'xxxxfejejeeaindeaiyaiaixxxxx';
const goodSpell3 = 'xxxxfejejeeainxxdeaiyaiaixxxxx';
const goodSpell4 = 'jejefeainai';
const goodSpell5 = 'jejefeaineai';
const goodSpell6 = 'fexxxxxxxxxxai';
const goodSpell7 = 'fejeeneaixdaiai';
const goodSpell8 = 'fedai';

console.log('\x1b[32m', '### CCFrontTask2 tests');

console.log('\x1b[33m', '    * Bad spells assertion');
assert.equal(ccft2.damage(badSpell1), 0, badSpell1);
assert.equal(ccft2.damage(badSpell2), 0, badSpell2);
assert.equal(ccft2.damage(badSpell3), 0, badSpell3);
assert.equal(ccft2.damage(badSpell4), 0, badSpell4);
assert.equal(ccft2.damage(badSpell5), 0, badSpell5);
assert.equal(ccft2.damage(badSpell6), 0, badSpell6);
assert.equal(ccft2.damage(badSpell7), 0, badSpell7);
assert.equal(ccft2.damage(badSpell8), 0, badSpell6);

console.log('\x1b[33m', '    * Good spells assertion');
assert.equal(ccft2.damage(goodSpell1), 3, goodSpell1);
assert.equal(ccft2.damage(goodSpell2), 12, goodSpell2);
assert.equal(ccft2.damage(goodSpell3), 10, goodSpell3);
assert.equal(ccft2.damage(goodSpell4), 6, goodSpell4);
assert.equal(ccft2.damage(goodSpell5), 7, goodSpell5);
assert.equal(ccft2.damage(goodSpell6), 0, goodSpell6);
assert.equal(ccft2.damage(goodSpell7), 14, goodSpell7);
assert.equal(ccft2.damage(goodSpell8), 2, goodSpell8);

console.log('\x1b[32m', '### All tests passed');
