const numbers = [1, 3, 5, 7, 8, 9, 10];

const multipleByTwo = numbers.map((num) => num * 2);

console.log(multipleByTwo);

const arrayMultiply = (arr, n) => arr.map((item) => item * n);

const result = arrayMultiply(numbers, 5);
console.log(result);
