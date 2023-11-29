const f = require('../code/TwoCrystalBalls');

test('two crystal balls', function () {
    let idx = Math.floor(Math.random() * 10000);
    const data = new Array(10000).fill(false);

    for (let i = idx; i < 10000; ++i) {
        data[i] = true;
    }

    expect(f.twoCrystalsBalls(data)).toEqual(idx);
    expect(f.twoCrystalsBalls(new Array(821).fill(false))).toEqual(-1);
});