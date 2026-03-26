function isAlphaNumeric(str) {
  return /^[a-zA-Z0-9]+$/.test(str);
}

const palindromes = function (string) {
  const cleanString = string
    .toLowerCase()
    .split("")
    .filter((item) => isAlphaNumeric(item))
    .join();

  const reversedString = cleanString.split("").reverse().join("");

  return cleanString === reversedString;
};

// Do not edit below this line
module.exports = palindromes;
