"use strict";
// Type Alias
Object.defineProperty(exports, "__esModule", { value: true });
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
const student1 = {
    name: "Sayed",
    age: 28,
    gender: Gender.Male,
    contactNo: "+8000000000",
};
const address = {
    street: "aBcd 2541",
    city: "Dhaka",
    state: "Dhaka",
    country: "Bangladesh",
};
const add = (num1, num2) => num1 + num2;
//# sourceMappingURL=1.9.js.map