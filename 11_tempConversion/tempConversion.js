function roundNumber(number) {
  return Math.round(number * 10) / 10;
}

const convertToCelsius = function (temp) {
  let tempConverted = (temp - 32) * (5 / 9);
  return roundNumber(tempConverted);
};

const convertToFahrenheit = function (temp) {
  let tempConverted = temp * (9 / 5) + 32;
  return roundNumber(tempConverted);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
