//? primitive data types
// string
// number
// boolean
// null
// undefined

// ? non-primitive
// object

const marks = [45, 55, 75, 44, { name: "A" }];

// const newMarks = marks; //copies reference(address) of array

// marks[0] = 55;

// ?spread operator
// ?copies value of primitive data types
// ?but copies reference of non-primitive data types
// const newMarks = [...marks]; //copies value

// newMarks[0] = 5500;

// marks[4].name = "Z";

// console.log(newMarks);

// deep copy
// structuredClone
// copies value only despite data type

// const newMarks = structuredClone(marks);

// newMarks[4].name = "U";
// console.log(marks);
