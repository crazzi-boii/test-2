const { add, subtract, multiply, divide } = require("../src/calcOperations");

describe("Calculator", () => {
  let calculator;
  let a;

  beforeEach(() => {
    calculator = { add, subtract, multiply, divide };
  });

  test("should add two numbers", () => {
    a = expect(calculator.add(2, 3)).toBe(5);
    expect(calculator.add(-1, 1)).toBe(0);
    expect(calculator.add(0, 0)).toBe(0);
  });

  test("should subtract two numbers", () => {
    expect(calculator.subtract(5, 3)).toBe(2);
    expect(calculator.subtract(1, 1)).toBe(0);
    expect(calculator.subtract(0, 0)).toBe(0);
  });

  test("should multiply two numbers", () => {
    expect(calculator.multiply(2, 3)).toBe(6);
    expect(calculator.multiply(-1, 1)).toBe(-1);
    expect(calculator.multiply(0, 0)).toBe(0);
  });

  test("should divide two numbers", () => {
    expect(calculator.divide(6, 3)).toBe(2);
    expect(calculator.divide(1, 2)).toBe(0.5);
  });

  test("should throw an error when dividing by zero", () => {
    expect(() => calculator.divide(5, 0)).toThrow("Cannot divide by zero");
  });

  /* afterAll(() => {
    console.log("Wooooo", JSON.parse(JSON.stringify(a, replacerFunc())));
  }); */
});

const replacerFunc = () => {
  const visited = new WeakSet();
  return (key, value) => {
    if (typeof value === "object" && value !== null) {
      if (visited.has(value)) {
        return;
      }
      visited.add(value);
    }
    return value;
  };
};
