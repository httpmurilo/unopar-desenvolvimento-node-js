const assert = require('assert');
const { sum } = require('../../atividade-2/math');

describe('Math Functions', () => {
  describe('sum()', () => {
    it('should return 5 when the inputs are 2 and 3', () => {
      assert.strictEqual(sum(3, 2), 5);
    });

    it('should return -1 when the inputs are -2 and 1', () => {
      assert.strictEqual(sum(-2, 1), -1);
    });

    it('should return 0 when the inputs are 0 and 0', () => {
      assert.strictEqual(sum(0, 0), 0);
    });
  });
});
