const mult = require("../src/mult")

it('Product of two numbers should be correct', () => {
  const result = mult(3, 4)
  expect(result).toBe(12)
})