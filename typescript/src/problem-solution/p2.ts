// Problem 02: Pluck problem solving
// Output: ["Alice", "Bob"]

const users = [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 30 },
];

const pluck = <T, K extends keyof T>(data: T[], property: K): Array<T[K]> => {
  const result = data.map((item) => item[property]);
  console.log(result);
  return result as Array<T[K]>;
};

pluck(users, "name");
