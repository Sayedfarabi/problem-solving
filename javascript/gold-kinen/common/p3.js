// Problem 03: Reverse string
// without built-in reverse method
const str = "javascript";
const reverseString = (str) => {
  let reversed = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversed = reversed + str[i];
  }
  return reversed;
};
console.log(reverseString(str));

// with built-in reverse
const reversed = [...str].reverse().join("");
console.log(reversed);

// with split and built-in reverse
const splitString = str.split("").reverse().join("");
console.log(splitString);
