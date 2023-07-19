/* The solution: 
  The function findMissingNumbers takes the input list "numbers" and iterates from 1 to the length of the list.
  It checks if each number in the range exists in the HashSet (set).
  If a number is not present, it is added to the missingNumbers array.
  I used the new Set() method because it has an average time complexity of O(1), making it efficient even for large sets.
  Also is validated if the input is not an array of positive numbers
*/

const findMissingNumbers = (numbers) => {
  if (!Array.isArray(numbers)) {
    throw new Error('Input is not an array');
  }
  if (numbers.some((num) => typeof num !== 'number' || num <= 0)) {
    throw new Error('Input array contains invalid entries');
  }
  const set = new Set(numbers);
  const missingNumbers = [];
  if (numbers.length === 0) {
    return [];
  }
  for (let i = 1; i <= numbers.length; i++) {
    if (!set.has(i)) {
      missingNumbers.push(i);
    }
  }

  return missingNumbers;
};

console.log(findMissingNumbers([4, 3, 2, 7, 8, 2, 3, 1])); // Output: [5, 6]
console.log(findMissingNumbers([1, 1])); // Output: [2]

module.exports = { findMissingNumbers }