const f = require('../code/BubbleSort');

test('bubble sort', function () {
    const arr = [9, 3, 7, 4, 69, 420, 42];

    debugger;
    f.bubbleSort(arr);
    expect(arr).toEqual([3, 4, 7, 9, 42, 69, 420]);
});