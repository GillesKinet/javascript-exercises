const repeatString = function (str, number) {
  if (number >= 0) {
    let arr = [];
    for (let i = 0; i < number; i++) {
      arr.push(str);
    }
    return arr.join("");
  } else {
    return "ERROR";
  }
};

// Do not edit below this line
module.exports = repeatString;
