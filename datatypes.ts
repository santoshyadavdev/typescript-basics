let lname: string;

lname = "Santosh";

let newname = lname.toUpperCase();

console.log(newname);

let age: number;

age = 25;
age = 25.5;

let dob = "25";

let result = parseInt(dob);

let isValid: boolean = false;

console.log(isValid);

let empList: string[];

empList = ["Santosh", "Santosh1", "Santosh2"];

let numList: Array<number>;

numList = [1, 2, 3, 4, 5];

// let newNum = numList[5];

let results = numList.filter((num) => num > 2);

let emp = empList.find((emp) => emp === "Santosh");

let sum = numList.reduce((acc, num) => acc + num);

console.log(results);
console.log(emp);
console.log(sum);

// lname = 10;

const enum Color {
  Red,
  Green,
  Blue,
}

let c: Color = Color.Blue;

let swapNumbs: [firstNumber: number, secondNumber: number];

function swapNumbers(num1: number, num2: number): [number, number] {
  return [num2, num1];
}

swapNumbs = swapNumbers(10, 20);

swapNumbs[0];
swapNumbs[1];

let department;

department = "IT";
department = 10;
