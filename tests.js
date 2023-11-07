const eliminateMaximum = require('./solution');
const assert = require('assert');

describe('eliminateMaximum', function() {
  it('should return 3 for [1, 3, 4] and [1, 1, 1]', function() {
    assert.strictEqual(eliminateMaximum([1, 3, 4], [1, 1, 1]), 3);
  });
  
  it('should return 1 for [1, 1, 2, 3] and [1, 1, 1, 1]', function() {
    assert.strictEqual(eliminateMaximum([1, 1, 2, 3], [1, 1, 1, 1]), 1);
  });
  
  it('should return 1 for [3, 2, 4] and [5, 3, 2]', function() {
    assert.strictEqual(eliminateMaximum([3, 2, 4], [5, 3, 2]), 1);
  });
  
  it('should return 0 for [] and []', function() {
    assert.strictEqual(eliminateMaximum([], []), 0);
  });
  
  it('should return 5 for [5, 5, 5] and [1, 1, 1]', function() {
    assert.strictEqual(eliminateMaximum([5, 5, 5], [1, 1, 1]), 3);
  });
});
