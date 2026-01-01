// Problem 05: Duplicate value remove from array

// Option 01:
const array = [1, 2, 2, 3, 4, 4, 5];
const uniqueArrayBySet = [...new Set(array)];
console.log({ uniqueArrayBySet });

// Option 02:
const uniqueArrayByFilter = array.filter((v, i, arr) => arr.indexOf(v) === i);
console.log({ uniqueArrayByFilter });
