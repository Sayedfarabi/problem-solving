const users = [
  { id: 1, name: "Alice", isActive: true },
  { id: 2, name: "Bob", isActive: false },
  { id: 3, name: "Charlie", isActive: true },
  { id: 4, name: "David", isActive: false },
];

const activeUsers = users.filter((user) => user.isActive);

console.log(activeUsers);
// Output:
// [
//   { id: 1, name: 'Alice', isActive: true },
//   { id: 3, name: 'Charlie', isActive: true }
// ]
// Explanation:
// Step 1: Use the filter method to iterate through each user object in the users array.
// Step 2: For each user, check if the isActive property is true.
// Step 3: If it is true, include that user object in the new array; otherwise, skip it.
// Step 4: The resulting array contains only the active users.

const activeUserNamesFromUsers = users
  .filter((user) => user.isActive)
  .map((user) => user.name);
console.log(activeUserNamesFromUsers); // Output: ['Alice', 'Charlie']
// Explanation:
// Step 1: First, filter the users array to get only active users.
// Step 2: Then, use the map method to extract the name property from each active user object.
// Step 3: The resulting array contains only the names of active users.
