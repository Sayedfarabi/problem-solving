// Problem 08: Rate Limit

const createRateLimit = (limit, windowMs) => {
  const users = new Map();
  return (userId) => {
    const now = Date.now();
    if (!users.get(userId)) {
      users.set(userId, { count: 1, startTime: now });
      return "Allowed";
    }
    const user = users.get(userId);
    if (now - user?.startTime > windowMs) {
      users.set(userId, { count: 1, startTime: now });
      return "Allowed";
    }
    if (user?.count < limit) {
      user.count++;
      return "Allowed";
    }
    return "Too many requests";
  };
};

const rateLimit = createRateLimit(10, 10000);

for (let i = 0; i <= 12; i++) {
  const result = rateLimit("u1");
  console.log({ result });
}
