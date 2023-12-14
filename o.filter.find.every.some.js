// ?filter => to filter out required values based upon condition
// ? return new array

// TODO:truthy or falsy values
// falsy values = > undefined, false, 0, -0, null, "", NaN
// we need only positive values
// in maximum cases original and returned array size are unequal

// let numList = [1, -1, 11, 0, 125, 78, 25, -121, -44];

// const positiveNumbers = numList.filter((item, index, self) => item >= 0);

// console.log(positiveNumbers);

let laptopList = [
  {
    name: "TUF F15",
    brand: "asus",
    price: 1044,
  },
  {
    name: "GF63",
    brand: "msi",
    price: 900,
  },
  {
    name: "macbook air m2",
    brand: "apple",
    price: 1400,
  },
  {
    name: "macbook pro m3",
    brand: "apple",
    price: 1999,
  },
  {
    name: "nitro",
    brand: "acer",
    price: 900,
  },
  {
    name: "nitro",
    brand: "acer",
    price: 800,
  },

  {
    name: "inspiron 55",
    brand: "dell",
    price: 700,
  },
];

// const laptopsAbove1K = laptopList.filter((item, index, self) => {
//   if (item.price > 1000) {
//     return item;
//   }
// });

// const laptopsAbove1K = laptopList.filter((item) => item.price > 1000);

// console.log(laptopsAbove1K);

// const appleLaptops = laptopList.filter((item) => item.brand === "apple");

// console.log(appleLaptops);

// ?find => returns first item which satisfies condition
// return item , not array

// const laptop = laptopList.find((item) => item.name === "nitro");

// const laptop = laptopList.find((item) => {
//   return item.name === "nitro" && item.price === 800;
// });

// console.log(laptop);

// ? find item greater than 90
// let marks = [45, 55, 35, 65, 95, 25, 11, 26, 91];

// const mark = marks.find((item) => item > 90);

// const marksAbove90 = marks.filter((item) => item > 90);

// console.log(marksAbove90);

// ? some and every => return boolean value
// ?some => check if at least one item satisfies the condition
// ?every => check if all items satisfies the condition

// let nums = [1, 2, 45, -10];

// const result = nums.some((item) => {
//   return item > 50;
// });

// const result = nums.every((item) => {
//   return item > -20;
// });

// console.log(result);

// ? includes => check either the item exists in array or not
// ? if item exists, returns true
// ? if item does not exist, returns false

// let nums = [1, 2, 3, 4];

// console.log(nums.includes(2));

// const name = "/admin/add";

// console.log(name.includes("admin"));

// const laptop = "MSI";
// laptop[0] = "A"; //writable:false

// console.log(laptop);

// let num = [1, 2, 3];

// num[0] = 100;
// console.log(num);

// const name = {};

// Object.defineProperty(name, "firstName", {
//   value: "Salon",
//   enumerable: false,
//   writable: true,
//   configurable: true,
// });

// name.firstName = "Minal";

// delete name.firstName;

// console.log(name.firstName);

// const name = {
//   firstName: "Minal",
// };
