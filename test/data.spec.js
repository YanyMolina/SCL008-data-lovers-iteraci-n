global.window = global;
global.assert = require('chai').assert;
require('../src/data');
require('./data.spec.js');

  describe('filterData', () => {
  it('debería ser una funcion', () => {
   assert.equal(typeof filterData, 'function');
  });
  });

  describe('sortPoke', () => {
    it('debería ser una funcion', () => {
     assert.equal(typeof sortPoke, 'function');
    });
    });

  describe('computeStats', () => {
    it('debería ser una funcion', () => {
      assert.equal(typeof computeStats, 'function');
      });
      });