// Rate Limit

type Bucket = {
  tokens: number;
  lastRefill: number;
};

class RateLimit {
  constructor() {}
  private bucket: Map<string, Bucket> = new Map();
  private MAX_LIMIT = 10;
  private REFILL_RATE = 10 / 60000;
  private refill(bucket: Bucket) {
    const now = Date.now();
    const elapsed = now - bucket?.lastRefill;
    const tokensToAdd = elapsed * this.REFILL_RATE;
    bucket.tokens = Math.min(this.MAX_LIMIT, bucket.tokens + tokensToAdd);
    bucket.lastRefill = now;
  }
  request(userId: string) {
    if (!this.bucket.has(userId)) {
      this.bucket.set(userId, {
        tokens: this.MAX_LIMIT,
        lastRefill: Date.now(),
      });
    }
    const bucket = this.bucket.get(userId)!;
    this.refill(bucket);
    if (bucket.tokens >= 1) {
      bucket.tokens -= 1;
      return { allowed: true };
    }
    return { allowed: false };
  }
}

const rateLimit = new RateLimit();

console.log(rateLimit.request("u1"));
// console.log(rateLimit.request("u1"));
// console.log(rateLimit.request("u1"));
// console.log(rateLimit.request("u1"));
// console.log(rateLimit.request("u1"));
// console.log(rateLimit.request("u1"));
// console.log(rateLimit.request("u1"));
// console.log(rateLimit.request("u1"));
// console.log(rateLimit.request("u1"));
// console.log(rateLimit.request("u1"));
// console.log(rateLimit.request("u1"));
