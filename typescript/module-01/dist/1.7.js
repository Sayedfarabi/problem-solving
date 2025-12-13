"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// spreed oparator
const bros1 = ["Mir", "Firoz", "Mizan"];
const bros2 = ["Tonmoy", "Sakil", "Rakib"];
bros1.push(...bros2);
console.log(bros1);
// rest oparator
const greetFriend = (...firends) => {
    firends.forEach((frnd) => console.log(`Hi, ${frnd}`));
};
console.log(greetFriend("Rakib", "Sakib", "Sumon"));
//# sourceMappingURL=1.7.js.map