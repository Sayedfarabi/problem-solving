// Constraints

type Student = {
  id: number;
  name: string;
  email: string;
  gender?: "Male" | "Female";
};

const addCourseToStudent = <T extends Student>(student: T) => {
  return {
    ...student,
    course: "Next Level Web Development",
  };
};

const student1: Student = {
  id: 1,
  name: "Sayed",
  email: "sayed@gmail.com",
};

// const result = addCourseToStudent(student1);
// console.log(result);

type TFood = {
  id: number;
  category: string;
  name: string;
};

const data: Array<TFood> = [
  { id: 1, category: "fruit", name: "apple" },
  { id: 2, category: "fruit", name: "banana" },
  { id: 3, category: "vegetable", name: "carrot" },
];

// Output: Record<K, T>

// {
//   fruit: [
//     { id: 1, category: "fruit", name: "apple" },
//     { id: 2, category: "fruit", name: "banana" }
//   ],
//   vegetable: [
//     { id: 3, category: "vegetable", name: "carrot" }
//   ]
// }

const generatePropertyArray = <T, K extends keyof T>(
  data: Array<T>,
  property: K
): Record<string, T[]> => {
  return data.reduce((acc, curr) => {
    const group = String(curr[property]);
    if (!acc[group]) acc[group] = [];
    acc[group].push(curr);
    return acc;
  }, {} as Record<string, T[]>);
};

const result = generatePropertyArray(data, "category");
console.log(result);
