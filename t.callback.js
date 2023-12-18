// HOF => Higher Order function
// callback function =>
// function which is passed as an argument to another function

const getSum = (a, b, func) => {
  let sum = a + b;

  func(sum);
};

getSum(2, 22, (item) => {
  console.log(item);
});
