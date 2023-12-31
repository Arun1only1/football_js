// object => key value pair

// const student1 = {
//   firstName: "Prakash",
//   lastName: "Shrestha",
//   address: "Bhaktapur",
//   contact: "98524522",
//   email: "prakash@gmail.com",
//   age: 22,
//   isMarried: false,
//   hasBankAccount: null,
// };

// console.log(typeof student1);
// console.log(student1);

//? CRUD
// C => Create/Add
// R => Read/ Retrieve
// U => Update/Edit
// D => Delete/Remove

const bikeDetails = {
  price: "130k",
  volume: "155cc",
  abs: true,
};

// ?create
// ?dot operator/square operator
// bikeDetails.name = "MT15";
// bikeDetails["company"] = "Yamaha";
// bikeDetails.power = "16bhp";
// bikeDetails["torque"] = "15Nm";

//? read
// ?dot operator/square operator

// console.log(bikeDetails.power);
// console.log(bikeDetails["power"]);

// ?delete
// ?dot operator/square operator
// delete bikeDetails.price;
// delete bikeDetails["abs"];
// console.log(bikeDetails);

// ?update => upsert => update or insert
// ? dot operator/square operator
// bikeDetails.price = "150k";

// bikeDetails.color = "green";
// bikeDetails["abs"] = false;

// console.log(bikeDetails);

// const personDetails = {
//   firstName: "Samir",
//   lastName: "Kc",
//   address: {
//     temporary: "A",
//     permanent: "B",
//   },
// };

// console.log(personDetails.address.permanent);
// console.log(personDetails["address"]["permanent"]);
// console.log(personDetails.address["permanent"]);
// console.log(personDetails["address"].permanent);

// square bracket
// let phoneDetails = {
//   name: "iphone15",
//   price: "150k",
//   amount: "150k",
// };

// let someField = "price";
// console.log(phoneDetails[`${someField}`]);

// ?assignment
// 2.

const myHouseDetails = {
  numberOfRooms: 9,
  numberOfMembers: 4,
  color: "green",
  builtYear: 1999,
  numberOfStorey: 3,
};

// delete myHouseDetails.numberOfMembers;

// myHouseDetails.numberOfRooms += 2; //x=x+2 => x+=2

// myHouseDetails["estimatedPriceOfHouse"] = "2 cr";
// console.log(myHouseDetails);

// “I have a green coloured house
//        with 9 rooms where 10 people are  living.
//        The house is 3 storey and was built in 2011
//        with an estimated budget of 2 crores.”

// console.log(
//   `I have a ${myHouseDetails.color} coloured house with ${myHouseDetails.numberOfRooms} rooms.`
// );

// const person = {
//   name: {
//     first: "Dinesh",
//     last: "Thakuri",
//   },
//   address: {
//     temporary: {
//       address1: "Bkt",
//       address2: "Pkr",
//     },
//   },
// };

// console.log(person.address.temporary.address1);
// console.log(person["address"]["temporary"]["address2"]);

// delete person.address.temporary.address2;
// console.log(person);
