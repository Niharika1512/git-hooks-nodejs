const sum = require("../src/sum")

it('Sum of two numbers should be correct', () => {
  const result = sum(3, 4)
  expect(result).toBe(7)
})