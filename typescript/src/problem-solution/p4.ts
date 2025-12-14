// Problem 4 — Generic Cache Class

// Requirements:
// class Cache<T> {
//   set(key: string, value: T): void;
//   get(key: string): T | undefined;
//   has(key: string): boolean;
// }

// Usage
// const userCache = new Cache<User>();
// userCache.set("u1", { id: 1, name: "Alice" });

class Cache<T> {
  private map = new Map<string, T>();
  public set(id: string, data: T): void {
    this.map.set(id, data);
  }
  public get(id: string): T | undefined {
    return this.map.get(id);
  }
  public has(id: string): boolean {
    return this.map.has(id);
  }
}

type User = {
  id: number;
  name: string;
};

const userCache = new Cache<User>();
userCache.set("u1", { id: 1, name: "Sayed" });
userCache.set("u2", { id: 2, name: "Rakib" });
const getUser = userCache.get("u1");
const hasUser = userCache.has("u2");
console.log(hasUser);
console.log(getUser);
