// Problem 07: Sum Even Number

const numbers = [1, 2, 3, 4, 6];

const generateEvenSum = (numbers) => {
  return numbers.reduce((acc, cur) => (cur % 2 === 0 ? acc + cur : acc), 0);
};

console.log(generateEvenSum(numbers));
