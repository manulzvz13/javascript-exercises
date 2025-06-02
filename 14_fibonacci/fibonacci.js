const fibonacci = function (num) {
  let count;
  if (typeof num !== "number") {
    count = parseInt(num);
  } else {
    count = num;
  }
  if (count < 0) return "OOPS";
  if (count == 0) return 0;
  let a = 1;
  let b = 1;
  for (let i = 3; i <= count; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
};

// Do not edit below this line
module.exports = fibonacci;
