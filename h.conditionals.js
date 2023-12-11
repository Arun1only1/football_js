// code execution depends upon condition

if (false) {
  console.log("Hello");
}

// ? if..else

// ?syntax
// if(condition){
// some code here
// }else{
// some code here
// }

// let result = "name" !== "name"; //false

// if (result) {
//   console.log("Hi");
// } else {
//   console.log("Hello");
// }

// ?check if a number is odd or even

// let num = 248;

// let remainder = num % 2;

// if (remainder === 1) {
//   console.log(`${num} is an odd number.`);
// } else {
//   console.log(`${num} is an even number.`);
// }

// ?if..else if ..else

//? syntax

// if(condition1){
// some code here
// }else if(condition2){
// some code here
// }else if(condition3){
// some code here
// }else{
// some code here
// }

// ?height => 130 cm=> short , 160cm => medium-height, > 160 tall-height

// let height = 190;

// if (height <= 130) {
//   console.log("Short height");
// } else if (height <= 160) {
//   console.log("Medium height");
// } else {
//   console.log("Tall height");
// }

// ? print out greatest number among three number

// let x = 5;
// let y = 10;
// let z = 10;

// if (x > y && x > z) {
//   console.log("x is greatest");
// } else if (y > z && y > x) {
//   console.log("y is greatest");
// } else if (z > x && z > y) {
//   console.log("z is greatest");
// } else {
//   console.log("Case of equality");
// }

// let sthg = 25;

// const isNumber = typeof sthg === "number";

// if (isNumber) {
//   console.log(`${sthg} is number`);
// } else {
//   console.log(`${sthg} is not  number`);
// }

// TODO:ternary

// ?switch

// let day = 77;

// if (day === 1) {
//   console.log("Sunday");
// } else if (day === 2) {
//   console.log("Monday");
// } else if (day === 3) {
//   console.log("Tuesday");
// } else if (day === 4) {
//   console.log("Wednesday");
// } else if (day === 5) {
//   console.log("Thursday");
// } else if (day === 6) {
//   console.log("Friday");
// } else if (day === 7) {
//   console.log("Saturday");
// } else {
//   console.log("Invalid day number");
// }

// let day = 1;
// switch is case of ===
// switch (day) {
//   case 1:
//     console.log("Sunday");
//     break;
//   case 2:
//     console.log("Monday");
//     break;
//   case 3:
//     console.log("Tuesday");
//     break;
//   case 4:
//     console.log("Wednesday");
//     break;
//   case 5:
//     console.log("Thursday");
//     break;
//   case 6:
//     console.log("Friday");
//     break;
//   case 7:
//     console.log("Saturday");
//     break;
//   default:
//     console.log("Invalid number");
// }

//? ternary

// let num = 5;
// let remainder = num % 2;

// if (remainder === 0) {
//   console.log("even");
// } else {
//   console.log("odd");
// }
// ?syntax
// condition ? true case: false case
// remainder === 0 ? console.log("even") : console.log("odd");

// largest of two numbers
let a = 5;
let b = 5;

// a > b ? console.log("a is greatest") : console.log("b is greatest");

// if (a > b) {
//   console.log("a is greatest");
// } else {
//   console.log("b is greatest");
// }

// ? conditional chains
// a > b
//   ? console.log("a is greatest")
//   : b > a
//   ? console.log("b is greatest")
//   : console.log("both equal");
