const sumAll = function (intOne, intTwo) {
  if (!Number.isInteger(intOne) || !Number.isInteger(intTwo)) {
    return "ERROR";
  }
  if (intOne > 0 && intTwo > 0) {
    let sum = 0;
    if (intOne < intTwo) {
      for (let i = intOne; i <= intTwo; i++) {
        sum += i;
      }
      return sum;
    } else {
      for (let i = intTwo; i <= intOne; i++) {
        sum += i;
      }
      return sum;
    }
  } else {
    return "ERROR";
  }
};

// Do not edit below this line
module.exports = sumAll;
