// ?object copy
// let myFavoriteFood = {
//   name: "Biryani",
//   spicy: true,
//   nonVeg: true,
//   price: 450,
// };

// let x = myFavoriteFood;

// x.name = "Momo";

// myFavoriteFood.price = 150;

// console.log(x);

// ?spread operator ...

// let x = { ...myFavoriteFood };

// x.name = "Thukpa";

// console.log(myFavoriteFood);

let person = {
  name: "Alish Thapa",
  address: {
    temporary: "A",
    permanent: "B",
  },
  college: "EEC",
};

// let person2 = { ...person };
// person.address.temporary = "Z";
// console.log(person2);

let person3 = structuredClone(person);

person3.address.temporary = "Z";
console.log(person);

// TODO: let vs const
