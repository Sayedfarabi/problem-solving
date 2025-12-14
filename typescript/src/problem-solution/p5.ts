// Problem 5 — Generic Function with Constraints

// Rules:
// Must accept strings, arrays, or objects with length
// Reject inputs without length

// Example:
// getLength("hello");   // 5
// getLength([1, 2, 3]); // 3

type HasLength = {
  length: number;
};

const getLength = <T extends HasLength>(data: T): number => {
  return data.length;
};

// const result = getLength([1, 2, 3]);
// const result = getLength("Sayed Hasan Farabi");
const result = getLength({
  id: 1,
  name: "Abu",
  email: "abu@gmail.com",
  phone: "017858585858",
  length: 5,
});
console.log(result);
