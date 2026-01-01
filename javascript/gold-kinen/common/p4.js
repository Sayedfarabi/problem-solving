// Problem 04: Find total vowel
const countVawel = (str) => {
  const vowels = "aeiou";
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i].toLowerCase())) {
      count++;
    }
  }
  return count;
};
console.log(countVawel(str));
