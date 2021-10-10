 const caesarCipher = require('./caesar-cipher');
 
 test('successfully encodes a char', () => {
     expect(caesarCipher('a', 2)).toBe('c');
 })
 test('wraps z to a', () => {
     expect(caesarCipher('z', 1)).toBe('a');
     expect(caesarCipher('y', 5)).toBe('d')
 })
 test('persists proper casing', () => {
     expect(caesarCipher('AbC', 2)).toBe('CdE');
 })
 test('punctuation persists', () => {
     expect(caesarCipher('S.O.S', 3)).toBe('V.R.V');
 })
 test ('spaces persist', () => {
     expect(caesarCipher('s o s', 4)).toBe('w s w');
 })