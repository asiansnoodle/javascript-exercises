const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
	let sum = 0;
  for (let i=0; i<arr.length; i++){
    sum += arr[i];
  }
  return sum;
};

const multiply = function(arr) {
  let start = arr[0];
  for (let i=1; i<arr.length; i++){
    start = start * arr[i];
  }
  return start;
};

const power = function(x, y) {
	return x ** y;
};

const factorial = function(x) {
	if (x == 0) return 1;
  if (x == 1) return 1;

  return x * factorial(x - 1);

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
