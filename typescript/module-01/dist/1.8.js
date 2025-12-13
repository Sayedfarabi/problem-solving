"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Destructuring
const user = {
    name: {
        firstName: "Abu",
        lastName: "Sayed",
    },
    phone: "+880000000000",
    address: "Bangladesh",
};
const { address, name: { firstName, lastName }, phone, } = user;
// Array Destructuring
const myFriends = ["Salam", "Kalam", "Sagor", "Rasel"];
const [a, b, c, d] = myFriends;
console.log(c);
//# sourceMappingURL=1.8.js.map