// Type Alias

enum Gender {
  "Male",
  "Female",
}

type Student1 = {
  name: string;
  age: number;
  gender: Gender;
  contactNo: string;
};

const student1: Student1 = {
  name: "Sayed",
  age: 28,
  gender: Gender.Male,
  contactNo: "+8000000000",
};

interface Address {
  street: string;
  city: string;
  state: string;
  country: string;
}

const address: Address = {
  street: "aBcd 2541",
  city: "Dhaka",
  state: "Dhaka",
  country: "Bangladesh",
};

// Function

type Add = (num1: number, num2: number) => number;

const add: Add = (num1, num2) => num1 + num2;
