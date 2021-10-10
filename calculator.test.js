const calculator = require('./calculator');

test('adds 1 + 2', () => {
    expect(calculator.add(1, 2)).toBe(3);
})
test('subs 5 - 3', () => {
    expect(calculator.subtract(5, 3)).toBe(2);
})
test('multiply 3 * 9', () => {
    expect(calculator.multiply(3, 9)).toBe(27);
})
test('divide 3 / 4', () => {
    expect(calculator.divide(3, 4)).toBe(.75);
})