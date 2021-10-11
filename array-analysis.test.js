import arrayAnalysis from './array-analysis';

test('calcs simple avg', () => {
    expect(arrayAnalysis([1, 2])).toEqual(expect.objectContaining({average: 1.5}));
});

test('calcs min value element', () => {
    expect(arrayAnalysis([2, 1, 5])).toEqual(expect.objectContaining({min: 1}));
})

test('calcs max value element', () => {
    expect(arrayAnalysis([2, 1, 5])).toEqual(expect.objectContaining({max: 5}));
})

test('calcs array length', () => {
    expect(arrayAnalysis([2, 1, 5, 4])).toEqual(expect.objectContaining({length: 4}));
})