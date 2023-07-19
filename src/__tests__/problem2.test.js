const { getAddUpToTarget } = require('../problem2/problem2');

describe('getAddUpToTarget function', () => {
  describe('valid inputs', () => {
    it('test consecutive numbers', () => {
      const result = getAddUpToTarget([1, 2, 3, 4, 6], 10);
      const expected = [3, 4];
      expect(result).toEqual(expected);
    });
    it('test non consecutive numbers', () => {
      const result = getAddUpToTarget([1, 7, 5, 8, 3], 10);
      const expected = [1, 4];
      expect(result).toEqual(expected);
    });
    it('test pair numbers as input', () => {
      const result = getAddUpToTarget([2, 4, 8, 10], 18);
      const expected = [2, 3];
      expect(result).toEqual(expected);
    });
    it('test odd numbers as input', () => {
      const result = getAddUpToTarget([1, 3, 5, 9], 6);
      const expected = [0, 2];
      expect(result).toEqual(expected);
    });
    it('test one number', () => {
      const result = getAddUpToTarget([1], 1);
      const expected = [];
      expect(result).toEqual(expected);
    });
    it('test empty array', () => {
      const result = getAddUpToTarget([], 1);
      const expected = [];
      expect(result).toEqual(expected);
    });
    it('test decimal numbers', () => {
      const result = getAddUpToTarget([0.5, 1.5, 2.5, 6.5, 7.5, 8.5], 4);
      const expected = [1, 2];
      expect(result).toEqual(expected);
    });
    it('test with negative numbers', () => {
      const result = getAddUpToTarget([-2, -1, 1, 2], 1);
      const expected = [1, 3];
      expect(result).toEqual(expected);
    });
  });

  describe('Invalid arrays', () => {
    it('test with object as an input', () => {
      expect(() => {
        getAddUpToTarget({}, 1);
      }).toThrow('Invalid input types. Expected an array and a number.');
    });
    it('test with string as an input', () => {
      expect(() => {
        getAddUpToTarget('Hello', 1);
      }).toThrow('Invalid input types. Expected an array and a number.');
    });
    it('test with boolean false as an input', () => {
      expect(() => {
        getAddUpToTarget([1, 2], false);
      }).toThrow('Invalid input types. Expected an array and a number.');
    });
    it('test with boolean true as an input', () => {
      expect(() => {
        getAddUpToTarget([3, 4], true);
      }).toThrow('Invalid input types. Expected an array and a number.');
    });
  });

  describe('Large input array', () => {
    it('returns the correct missing numbers for a very large array', () => {
      const numbers = [];
      for (let i = 1; i <= 1000000; i++) {
        if (i !== 500000) {
          numbers.push(i);
        }
      }
      const result = getAddUpToTarget(numbers, 45);
      expect(result).toEqual([21, 22]);
    });
  });
});
