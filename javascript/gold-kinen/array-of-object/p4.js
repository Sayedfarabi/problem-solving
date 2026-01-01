// Problem 04: Generate total revinue

const transactions = [
  { id: 1, amount: 100, createdAt: "2025-01-01T10:00:00Z" },
  { id: 2, amount: 200, createdAt: "2025-01-01T15:30:00Z" },
  { id: 3, amount: 300, createdAt: "2025-01-02T09:00:00Z" },
];

const dailyRevinue = transactions.reduce((acc, curr) => {
  const key = new Date(curr.createdAt).toISOString().slice(0, 10);
  if (!acc[key]) acc[key] = 0;
  acc[key] += curr?.amount;
  return acc;
}, {});

console.log(dailyRevinue);
