"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Ternary, Optional Chaining & Nullish Coalescing Operator
const age = 15;
if (age >= 18) {
    console.log("Adult");
}
else {
    console.log("Not Adult");
}
// Ternary Operator
const isAdult = age >= 18 ? "Adult" : "Not Adult";
console.log(isAdult);
// Nullish Coalescing Operator
// null | undefined --> decision making
const isAuthenticated = null;
const result = isAuthenticated ?? "Guest";
console.log({ result });
const user = {
    name: "Sayed",
    address: {
        city: "Dhaka",
        road: "agbdd",
        presentAddress: "shamsunnahar vila",
    },
};
const permanentAddress = user?.address?.permanentAddress ?? "No Permanent Address";
console.log({ permanentAddress });
//# sourceMappingURL=1.11.js.map