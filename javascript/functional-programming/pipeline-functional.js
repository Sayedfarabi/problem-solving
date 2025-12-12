const users = [
  { name: "Sayed", age: 25 },
  { name: "Rafi", age: 32 },
  { name: "Nila", age: 18 },
  { name: "Bristy", age: 40 },
];

const pipe =
  (...fns) =>
  (x) =>
    fns.reduce((v, fn) => fn(v), x);

const filterAdults = (arr) => arr.filter((u) => u.age >= 30);
const upperNames = (arr) =>
  arr.map((u) => ({ ...u, name: u.name.toUpperCase() }));
const sortByName = (arr) =>
  [...arr].sort((a, b) => a.name.localeCompare(b.name));

const processUsers = pipe(filterAdults, upperNames, sortByName);

console.log(processUsers(users));
