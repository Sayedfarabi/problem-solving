// Problem 02: Sort by latest order
const orders = [
  { id: 101, amount: 500, createdAt: "2025-01-01" },
  { id: 102, amount: 300, createdAt: "2024-12-28" },
  { id: 103, amount: 900, createdAt: "2025-01-05" },
];

const latestOrders = orders.sort(
  (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
);

console.log(latestOrders);
