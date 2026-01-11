// Let's say we have a list of expenses
// We want to get a category wise report of expenses.
// Let's write a function that takes an array of expense objects
// and returns an array of objects which summarizes the expenses
// based on category.

// Example input:

const expenses = [
  {
    category: "food",
    amount: 200,
    date: "2024-01-01",
  },
  {
    category: "travel",
    amount: 200,
    date: "2024-02-01",
  },
  {
    category: "travel",
    amount: 130,
    date: "2024-03-20",
  },
  {
    category: "food",
    amount: 150,
    date: "2024-03-22",
  },
  {
    category: "food",
    amount: 100,
    date: "2024-03-23",
  },
];
// Example output:
/**
 * 
[
  {
    "category": "food",
    "total": 450
  },
  {
    "category": "travel",
    "total": 330
  }
]
*/

// {
//   "food": 450,
//   "travel": 330
// }

const generateGroup = (array) => {
  const grouped = array.reduce((acc, curr) => {
    const category = curr.category;
    if (!acc[category]) {
      acc[category] = curr.amount;
    } else {
      acc[category] = acc[category] + curr.amount;
    }
    return acc;
  }, {});

  console.log({ grouped });

  const categories = Object.keys(grouped); // [food, travel]

  const result = [];
  for (const category of categories) {
    const amount = grouped[category];
    result.push({
      category,
      amount,
    });
  }

  return result;
};

const result = generateGroup(expenses);
// console.log(result);

// const generateGroup2 = (array) => {
//   const grouped = array.reduce((acc, curr) => {
//     const category = curr.category;
//     if (!acc[category]) acc[category] = curr.amount;
//     else acc[category] += curr.amount;
//     return acc;
//   }, {});
//   return Object.keys(grouped).map((category) => ({
//     category,
//     total: grouped[category],
//   }));
// };
