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

const result = addCourseToStudent(student1);
console.log(result);
