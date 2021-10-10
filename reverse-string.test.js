const reverseString = require('./reverse-string');

test('reverses 3 char string', () => {
    expect(reverseString('owl')).toBe('lwo');
})

test('preserves whitespace', () => {
    expect(reverseString('a s d f')).toBe('f d s a');
})