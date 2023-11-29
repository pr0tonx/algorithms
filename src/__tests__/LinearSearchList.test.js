const f = require('../code/LinearSearchList');

test('linear search array', () => {
    const foo = [1, 3, 4, 69, 71, 81, 90, 99, 420, 1337, 69420];

    expect(f.linearSearch(foo, 69)).toEqual(true);
    expect(f.linearSearch(foo, 1336)).toEqual(false);
    expect(f.linearSearch(foo, 69420)).toEqual(true);
    expect(f.linearSearch(foo, 69421)).toEqual(false);
    expect(f.linearSearch(foo, 1)).toEqual(true);
    expect(f.linearSearch(foo, 0)).toEqual(false);
});