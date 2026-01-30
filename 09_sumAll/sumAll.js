const sumAll = function (a, b) {
  if (typeof a === "string" || typeof b === "string") {
    return "ERROR";
  } else if (!Number.isInteger(a) || !Number.isInteger(b)) {
    return "ERROR";
  } else if (a < 0 || b < 0) {
    return "ERROR";
  } else {
    let c = a < b ? a : b;
    const d = a > b ? a : b;
    let sum = 0;
    for (let i = c; i < d + 1; i++) {
      sum += i;
    }
    return sum;
  }
};

// Do not edit below this line
module.exports = sumAll;
