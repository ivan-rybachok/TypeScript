let myName: string = "Ivan";
let meaningOfLife: number;
let isLoading: boolean;
// union type
// let album: string | number;
let album: any;

myName = "John";
meaningOfLife = 42;
isLoading = true;
album = 1984;

const sum = (a: number, b: number) => {
  return a + b;
};

let postId: string | number;
let isActive: number | boolean;

let re: RegExp = /\w+/g;
