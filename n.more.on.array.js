// map
// filter
// find
// findIndex

// map => iterates through array elements and returns newArray
// returned array and newArray are of same size

// let phoneBrands = ["iphone", "samsung", "huwawei", "nokia"];

// phoneBrands.map((item, index, array) => {
//   console.log(item, index, array);
// });

// let numbers = [100, 105, 201, 735, 637];

// increase each number by 10

// const newNumList = numbers.map((item, index, self) => {
//   let newNumber = item + 10;

//   return newNumber;
// });

// console.log(newNumList);

// let priceList = [5000, 7000, 1500, 705, 1135, 14000];
// due to 12/12 sale, generate newPriceList by giving 12 percent discount on each item

// tshirt = 100;

// newPrice = originalPrice - (12 / 100) * originalPrice;
// newPrice = originalPrice(1-12/100)
// newPrice =  oP* (88/100)
// newPrice = op * 0.88;

// let priceList = [5000, 7000, 1500, 705, 1135, 14000];

// const newPriceList = priceList.map((item) => item * 0.88);

// console.log(newPriceList);

// op =100
// np = op +7/100 * op
// np = op(1+0.07)
// np = op * 1.07

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

// ? due to sudden rise in tax, add 7% to the price of each laptop

//? solution1
// const newLaptopList = laptopList.map((item, index, self) => {
//   const newPrice = item.price * 1.07;

//   item.price = newPrice;

//   return item;
// });

// console.log(newLaptopList);

// ? solution 2
// const newLaptopList = laptopList.map((item, index, self) => ({
//   ...item,
//   price: item.price * 1.07,
// }));

// console.log(newLaptopList);
