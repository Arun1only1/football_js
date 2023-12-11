// function
// =>block of code organized together which performs specific task
// => ensures code reusability
// => code and logic are repeated

// single point of failure
// let num1 = 5;

// num1 % 2 === 0 ? console.log("even") : console.log("odd");

// let num2 = 9;
// num2 % 2 === 0 ? console.log("even") : console.log("odd");

//? syntax
// function functionName(){
// some codes here
// }

// function calculateSum(x, y) {
//   let sum = x + y;

//   return sum;
// }

//calling a function/ invoking a function

// const result = calculateSum(11, 15);
// console.log(result);

// let x = 9;
// let y = 7;
// let sum = 0;

// function calculateSum() {
//   sum = x + y;
// }

// calculateSum();

// console.log(sum);

// function checkOddOrEven(x) {
//   let remainder = x % 2;
//   let result;

//   if (remainder === 0) {
//     result = "even";
//   } else {
//     result = "odd";
//   }

//   x % 2 == 0 ? (result = "even") : (result = "odd");

//   return result;
// }

// const result = checkOddOrEven(15);
// console.log(result);

// 0 to n

// function getSum(num) {
//   let i = 0;

//   let sum = 0;
//   while (i <= num) {
//     sum += i; // sum = sum + i;

//     i++;
//   }

//   return sum;
// }

// const res = getSum(100);
// console.log(res);

// ?arrow function
// anonymous
// const getProduct = (x, y) => x * y;

// const result = getProduct(2, 5);

// console.log(result);

// const checkOddOrEven = (num) => (num % 2 === 0 ? "even" : "odd");

// const result = checkOddOrEven(45);
// console.log(result);

// ?Write a function that takes “add”/“subtract”/”multiply”/”divide”
//? and two numbers as parameters and perform appropriate operations.

// const calculator = (a, b, option) => {
//   let result;

//   switch (option) {
//     case "add":
//       result = a + b;
//       break;
//     case "subtract":
//       result = a - b;
//       break;
//     case "multiply":
//       result = a * b;
//       break;
//     case "divide":
//       result = a / b;
//       break;

//     default:
//       console.log("could not match option");
//   }

//   return result;
// };

// const res = calculator(8, 9, "divide");
// console.log(res);

// WAF that converts dollars into cents.

// const convertDollarToCents = (dollar) => dollar * 100;

// const res = convertDollarToCents(7);
// console.log(res);

//? WAF that takes first name and last name and returns full name.
//   const fullName = firstName + " " + lastName;
//   const fullName = `${firstName} ${lastName}`;
//   const fullName = firstName.concat(" ", lastName);

// const getFullName = (firstName, lastName) => `${firstName} ${lastName}`;

// const res = getFullName("Rohil", "Karki");
// console.log(res);

// WAF that takes fullName and prints out firstName and lastName

// const getFirstAndLastName = (fullName) => {
//   console.log(fullName.split(" "));
// };

// getFirstAndLastName("Dinesh Thakuri");

// ?IIFE => Immediately Invoked Function Expression

// (function getSum(a, b) {
//   console.log(a + b);
// })(2, 3);

// ((a, b) => {
//   console.log(a * b);
// })(5, 6);

// ? WAF which checks if the provided number is positive,negative or zero

// const checkNumber = (num) => {
//   let result;

//   if (num > 0) {
//     result = "positive";
//   } else if (num < 0) {
//     result = "negative";
//   } else {
//     result = "zero";
//   }

//   return result;
// };

// console.log(checkNumber(-0));

// ? print prime numbers from 2 to n
const getPrimeNumbers = (start, end) => {
  for (i = start; i <= end; i++) {
    let prime = true;

    for (j = 2; j < i; j++) {
      let remainder = i % j;

      if (remainder === 0) {
        prime = false;
        break;
      }
    }

    if (prime) {
      console.log(i);
    }
  }
};

getPrimeNumbers(100, 200);
