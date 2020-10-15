// const name = "Nicolas",
//   age = 24,
//   gender = "male";

// const sayHi = (name, age, gender?) => {
//   console.log(`Hello ${name}, you are ${age}, you are a ${gender}`);
// };

// sayHi(name, age);

// export {};

const sayHi = (name: string, age: number, gender: string): string => {
  return `Hello ${name}, you are ${age}, you are a ${gender}`;
};

console.log(sayHi("Nicolas", 24, "male"));

export {};