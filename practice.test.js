const capitalize = require('./capitalize');

test('capitalize single char', () => {
    expect(capitalize('f')).toBe('F');
});

test('capitalize only the first char', () => {
    expect(capitalize('asdf')).toBe('Asdf');
})

test('preserve whitespace', () => {
    expect(capitalize('w w ')).toBe('W w ')
})