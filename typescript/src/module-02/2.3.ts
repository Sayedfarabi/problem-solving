// Generic Type

// type GenericArray = Array<number>;
// type GenericArray<param> = Array<param>;
type GenericArray<T> = Array<T>;

const rollNumber: GenericArray<number> = [1, 2, 3, 4, 5, 6, 7];
const mentors: GenericArray<string> = ["Mr. x", "Mr. Y", "Mr. Z"];
const boolArray: GenericArray<boolean> = [
  true,
  false,
  false,
  true,
  true,
  true,
  false,
];

type TUser = {
  id: string;
  name: string;
  age: number;
  email: string;
  phone?: string;
};

const users: GenericArray<TUser> = [
  {
    id: "001",
    name: "Sayed",
    age: 28,
    email: "sayed@gmail.com",
    phone: "+8801787584525",
  },
  {
    id: "002",
    name: "Sakil",
    age: 22,
    email: "sakil@gmail.com",
    phone: "+8801787556985",
  },
];

// Generic Tuple
type GenericTuple<X, Y> = [X, Y];

const manush: GenericTuple<string, TUser> = [
  "Mr. X",
  {
    id: "001",
    name: "Mr. X",
    age: 28,
    email: "mr-x@gmail.com",
    phone: "+8801787584525",
  },
];
