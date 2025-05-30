const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
  return array.reduce((total, current) => total + current, 0);
};

const multiply = function(array) {
  return array.reduce((total, current) => total * current, 1);
};

const power = function(num1, num2) {
	return num1 ** num2;
};

function factorialNum(n) {
  return n ? n * factorial(n - 1) : 1;
}

const factorial = function(num) {
  return factorialNum(num);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
