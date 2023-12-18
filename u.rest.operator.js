// rest operator is used to collect data passed to function as argument
const getAverage = (a, b, ...otherNumbers) => {
  let sum = 0;

  otherNumbers.forEach((item) => {
    sum = sum + item;
  });

  sum = sum + a + b;
  console.log(sum);

  let avg = sum / (2 + otherNumbers.length);

  return avg;
};

const result = getAverage(1, 2, 6, 5, 4, 3, 7, 8, 9);
console.log(result);
