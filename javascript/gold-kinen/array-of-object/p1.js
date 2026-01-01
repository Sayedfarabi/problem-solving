// Problem 01: Find max last 7 days ago login users

const users = [
  { id: 1, name: "A", lastLogin: "2025-01-01" },
  { id: 2, name: "B", lastLogin: "2026-01-01" },
  { id: 3, name: "C", lastLogin: "2025-01-05" },
];

const getActiveUser = (users) => {
  const now = new Date();
  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(now.getDate() - 7);
  //   console.log(sevenDaysAgo);

  return users.filter((user) => {
    const lastLoginDate = new Date(user.lastLogin);
    // console.log(lastLoginDate);
    return lastLoginDate >= sevenDaysAgo;
  });
};

console.log(getActiveUser(users));
