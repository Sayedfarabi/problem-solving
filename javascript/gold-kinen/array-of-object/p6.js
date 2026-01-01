// Problem 06: Filter records deletedAt = null || future date

const records = [
  { id: 1, name: "A", deletedAt: null },
  { id: 2, name: "B", deletedAt: "2024-12-01" },
  { id: 3, name: "C", deletedAt: "2026-12-01" },
];

const filterSoftDeleted = (records) => {
  const now = new Date();

  return records.filter((record) => {
    if (record.deletedAt === null) {
      return true;
    }

    const deletedAtDate = new Date(record.deletedAt);
    return deletedAtDate > now;
  });
};

// Test
console.log(filterSoftDeleted(records));
