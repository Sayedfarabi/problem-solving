// Problem 03: Group by date

const transactions = [
  { id: 1, amount: 100, createdAt: "2025-01-01T10:00:00Z" },
  { id: 2, amount: 200, createdAt: "2025-01-01T15:30:00Z" },
  { id: 3, amount: 300, createdAt: "2025-01-02T09:00:00Z" },
];

const groupedTransactions = transactions.reduce((acc, curr) => {
  const key = new Date(curr.createdAt).toISOString().slice(0, 10);
  if (!acc[key]) acc[key] = [];
  acc[key].push(curr);
  return acc;
}, {});

console.log(groupedTransactions);
