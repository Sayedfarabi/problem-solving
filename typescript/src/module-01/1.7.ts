// spreed oparator
const bros1: string[] = ["Mir", "Firoz", "Mizan"];
const bros2: string[] = ["Tonmoy", "Sakil", "Rakib"];

bros1.push(...bros2);
console.log(bros1);

// rest oparator
const greetFriend = (...firends: string[]) => {
  firends.forEach((frnd) => console.log(`Hi, ${frnd}`));
};

console.log(greetFriend("Rakib", "Sakib", "Sumon"));
