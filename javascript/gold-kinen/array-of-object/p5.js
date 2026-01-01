// Problem 05: Find expireAt data
const subscriptions = [
  { userId: 1, plan: "basic", expiresAt: "2024-12-31" },
  { userId: 2, plan: "pro", expiresAt: "2025-02-01" },
  { userId: 3, plan: "pre", expiresAt: "2025-02-01" },
  { userId: 4, plan: "exclusive", expiresAt: "2026-01-01" },
];

const findExpiredSubscription = (subscriptions) => {
  const now = Date.now();

  return subscriptions.filter(({ expiresAt }) => {
    return new Date(expiresAt).getTime() < now;
  });
};

console.log(findExpiredSubscription(subscriptions));
