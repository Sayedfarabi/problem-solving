// Option 01:
const charCounterByCondition = (str) => {
  const obj = {};

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (!obj[char]) {
      obj[char] = 1;
    } else {
      obj[char]++;
    }
  }
  return obj;
};

// Option 02:
const charCounterByInlineCondition = (str) => {
  const obj = {};

  for (const char of str) {
    obj[char] = (obj[char] || 0) + 1;
  }
  return obj;
};

const str = "hello";
console.log(charCounterByInlineCondition(str));
