const sum = require("../src/sum")

it('Sum of two numbers should be correct', () => {
  const result = sum(3, 4)
  expect(result).toBe(7) // for the wrong test cases it will not commit the changes
})

// npm install pre-commit and the hooks will be added to .git/hooks