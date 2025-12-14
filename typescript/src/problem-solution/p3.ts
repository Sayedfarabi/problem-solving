// Problem 03: Generic API Response Wrapper

// Structure :
// {
//   success: boolean;
//   data: T;
//   error?: string;
// }

// Task:
// Create a generic ApiResponse<T>
// Use it for:
// ApiResponse<User>
// ApiResponse<number[]>
// ApiResponse<{ token: string }>

type ApiResponse<T> = {
  success: boolean;
  data?: T;
  error?: string;
};

const apiResponse = <T>(data: T): ApiResponse<T> => {
  return data
    ? {
        success: true,
        data: data,
      }
    : {
        success: false,
        // data: data,
        error: "Data not found",
      };
};

type User = {
  id: number;
  name: string;
  email: string;
};

const user: User = {
  id: 1,
  name: "Sayed",
  email: "sayed@gmail.com",
};

const numbers: Array<number> = [1, 2, 3, 4, 5, 6, 7];

const token: { token: string } = {
  token: "agdlklklkflkfk",
};

const getData = apiResponse(null);
console.log(getData);
