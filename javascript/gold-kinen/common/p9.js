// Problem 09:

const arr = [
  { name: "A", dept: "IT" },
  { name: "B", dept: "HR" },
  { name: "C", dept: "IT" },
];

// option 01
const generateGroupByLoop = (arr, property) => {
  const obj = {};
  for (const item of arr) {
    const propValue = item[property];
    if (!obj[propValue]) {
      obj[propValue] = [item];
    } else {
      obj[propValue] = [...obj[propValue], item];
    }
  }
  return obj;
};

// option 02
const generateGroupByReduce = (arr, property) => {
  return arr.reduce((acc, curr) => {
    const group = curr[property];
    if (!acc[group]) acc[group] = [];
    acc[group].push(curr);
    return acc;
  }, {});
};
console.log(generateGroupByReduce(arr, "dept"));
