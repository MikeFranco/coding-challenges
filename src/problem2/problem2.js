/* 
The solution:
  getAddUpToTarget function takes an array of "numbers" and a integer "target" as input.
  The idea is to find a pair of numbers in the "numbers" array that the sum of two consecutive
    values gives the "target" value and return the indexes of that two numbers.

Complexity: O(n).
*/

const getAddUpToTarget = (numbers, target) => {
  if (!Array.isArray(numbers) || typeof target !== 'number') {
    throw new Error('Invalid input types. Expected an array and a number.');
  }
  if (numbers.some((num) => typeof num !== 'number')) {
    throw new Error('Input array contains invalid entries');
  }
  const indexes = {};
  for (let i = 0; i < numbers.length; i++) {
    const complement = target - numbers[i];
    if (indexes[complement] !== undefined) {
      return [indexes[complement], i];
    }
    indexes[numbers[i]] = i;
  }
  return [];
};

console.log(getAddUpToTarget([2, 7, 11, 15], 9)); // [0,1]
console.log(getAddUpToTarget([3, 2, 4], 6)); // [1,2]
console.log(getAddUpToTarget([3, 3], 6)); // [0,1]
console.log(getAddUpToTarget([2, 11, 7, 15], 9)); // [0,2]
console.log(getAddUpToTarget([2, 11, 3, 14, 8, 7], 18)); // [1,5]

module.exports = { getAddUpToTarget }