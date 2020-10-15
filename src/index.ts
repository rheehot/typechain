// const name = "Nicolas",
//   age = 24,
//   gender = "male";

// const sayHi = (name, age, gender?) => {
//   console.log(`Hello ${name}, you are ${age}, you are a ${gender}`);
// };

// sayHi(name, age);

// export {};

//

// const sayHi = (name: string, age: number, gender: string): string => {
//   return `Hello ${name}, you are ${age}, you are a ${gender}`;
// };

// console.log(sayHi("Nicolas", 24, "male"));

// export {};

//

interface Human {
  name: string;
  age: number;
  gender: string;
}

const person = {
  name: "nicolas",
  age: 22,
  gender: "male"
};

const sayHi = (person: Human): string => {
  return `Hello ${person.name}, you are ${person.age}, you are a ${
    person.gender
  }!`;
};

console.log(sayHi(person));

export {};