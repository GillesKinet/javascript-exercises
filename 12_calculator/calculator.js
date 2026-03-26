const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (numbers) {
  return numbers.reduce((summ, current) => (summ += current), 0);
};

const multiply = function (numbers) {
  return numbers.reduce((summ, current) => summ * current, 1);
};

const power = function (a, b) {
  return Math.pow(a, b);
};

const factorial = function (n) {
  let factorial = 1;
  for (i = n; i > 0; i--) {
    factorial *= i;
  }
  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
