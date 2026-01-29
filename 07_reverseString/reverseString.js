const reverseString = function (str) {
  let array = [];
  for (let i = 0; i < str.length; i++) {
    array.push(str[i]);
  }
  return array.reverse().join("");
};

// Do not edit below this line
module.exports = reverseString;
