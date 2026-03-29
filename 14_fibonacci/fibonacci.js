const fibonacci = function (number) {
  const numberInt = parseInt(number);
  if (numberInt < 0) {
    return "OOPS";
  }
  let fibo = 0;

  if (numberInt === 0) {
    return fibo;
  }

  if (numberInt === 1) {
    return ++fibo;
  }

  let firstVal = 0;
  let secondVal = 1;

  for (let i = 2; i <= numberInt; i++) {
    fibo = firstVal + secondVal;
    firstVal = secondVal;
    secondVal = fibo;
  }

  return fibo;
};

// Do not edit below this line
module.exports = fibonacci;
