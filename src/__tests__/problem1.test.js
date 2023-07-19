const { findMissingNumbers } = require('../problem1/problem1');

describe('findMissingNumbers function', () => {
  describe('valid numbers', () => {
    it('test consecutive numbers', () => {
      const result = findMissingNumbers([1, 2, 3, 4, 6, 7]);
      const expected = [5];
      expect(result).toEqual(expected);
    });
    it('test repetitive numbers', () => {
      const result = findMissingNumbers([1, 2, 2, 3, 3, 4, 5, 6]);
      const expected = [7, 8];
      expect(result).toEqual(expected);
    });
    it('test pair numbers as input', () => {
      const result = findMissingNumbers([2, 4, 6, 8]);
      const expected = [1, 3];
      expect(result).toEqual(expected);
    });
    it('test odd numbers as input', () => {
      const result = findMissingNumbers([1, 3, 5, 7, 9]);
      const expected = [2, 4];
      expect(result).toEqual(expected);
    });
    it('test non consecutive numbers', () => {
      const result = findMissingNumbers([1, 7, 5, 8, 3, 9]);
      const expected = [2, 4, 6];
      expect(result).toEqual(expected);
    });
    it('test one number', () => {
      const result = findMissingNumbers([1]);
      const expected = [];
      expect(result).toEqual(expected);
    });
    it('test empty array', () => {
      const result = findMissingNumbers([]);
      const expected = [];
      expect(result).toEqual(expected);
    });
    it('test duplicate numbers', () => {
      const result = findMissingNumbers([1, 2, 2, 3, 3, 3]);
      const expected = [4, 5, 6];
      expect(result).toEqual(expected);
    });
    it('test decimal numbers', () => {
      const result = findMissingNumbers([0.5, 1.5, 2.5, 3.5, 4.5, 5.5, 6.5, 7.5, 8.5]);
      const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      expect(result).toEqual(expected);
    });
  });

  describe('Invalid arrays', () => {
    it('test with negative numbers', () => {
      expect(() => {
        findMissingNumbers([-2, -1, 1, 2]);
      }).toThrow('Input array contains invalid entries');
    });
    it('test with object as an input', () => {
      expect(() => {
        findMissingNumbers({});
      }).toThrow('Input is not an array');
    });
    it('test with string as an input', () => {
      expect(() => {
        findMissingNumbers('Hello world');
      }).toThrow('Input is not an array');
    });
    it('test with boolean false as an input', () => {
      expect(() => {
        findMissingNumbers(false);
      }).toThrow('Input is not an array');
    });
    it('test with boolean true as an input', () => {
      expect(() => {
        findMissingNumbers(true);
      }).toThrow('Input is not an array');
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
      const result = findMissingNumbers(numbers);
      expect(result).toEqual([500000]);
    });
  });
});

