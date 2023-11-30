function add(n1, n2) {
  return n1 + n2;
}

function subtract(n1, n2) {
  return n1 - n2;
}

function multiply(n1, n2) {
  return n1 * n2;
}

function divide(n1, n2) {
  if (n2 === 0) {
    throw new Error("Cannot divide by zero");
  }
  return n1 / n2;
}

/* function subtract(n1, n2) {}

function multiply(n1, n2) {}

function divide(n1, n2) {} */

module.exports = {
  add,
  subtract,
  multiply,
  divide,
};
