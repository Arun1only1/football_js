// array => complex data structure
// multiple data can be grouped together
// grouping  of similar typed data , string array, number array
// js supports mixed data types

// const numList = [ 1,2, 3];
// console.log(numList);

// const numbers = {
//   0: 100,
//   1: 101,
//   2: 102,
// };

// console.log(numbers[1]);

// const fruits = ["apple", "orange", "banana", "mango"];

// console.log(typeof fruits);
// console.log(fruits[4]);

// const countryList = [
//   "Nepal",
//   "Cambodia",
//   "Mongolia",
//   "Egypt",
//   "Israel",
//   "Chile",
//   "Mexico",
// ];

// console.log(countryList[6]);
// console.log(countryList.length);
// console.log(countryList[countryList.length - 1]);

// const friends = ["Dinesh", "Alish", "Prakash", "Abhisek"];

// ? push => add value to end of array

// friends.push("Nischal", "Aashish", "Unique");

// ?pop => removes last item from array

// friends.pop();

// ?unshift => adds item to start of array
// friends.unshift("Sujal", "Prijal", "Pranjal");

// ?shift => removes first item from array
// friends.shift();

// ?slice => breaks array
// slice() //works as copy
// slice(startIndex)
// slice(startIndex,endIndex) //excludes end value

// const numList = [100, 105, 109, 110, 200, 305, 406];

// const newList = numList.slice(2);

// const list2 = numList.slice(2, 5);

// console.log(list2);

// copies array
// const newList = numList.slice();
// console.log(newList);

// splice //removes,replaces,adds item to array
// splice(startIndex, deleteCount, value)
// const playerList = [
//   "Hari",
//   "Gulsan",
//   "Ashmina",
//   "Rashila",
//   "Bimal",
//   "Sky",
//   "Coetze",
// ];

// playerList.splice(2);
// playerList.splice(2, 2, "Ramila", "Kapil");

// console.log(playerList);

// const months = ["Jan", "March", "April", "June"];

// months.splice(1, 0, "Feb");

// months.splice(4, 0, "May");

// console.log(months);
