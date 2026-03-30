function calcAge(yearOfDeath, yearOfBirth) {
  let recalcYearOfDeath = yearOfDeath;
  if (recalcYearOfDeath === undefined) {
    recalcYearOfDeath = new Date().getFullYear();
  }
  return recalcYearOfDeath - yearOfBirth;
}
const findTheOldest = function (arr) {
  const ageArray = arr.map((item) =>
    calcAge(item.yearOfDeath, item.yearOfBirth),
  );
  const max = Math.max(...ageArray);
  console.log(max);
  const oldestPerson = arr.find((item) => {
    return calcAge(item.yearOfDeath, item.yearOfBirth) === max;
  });
  return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
