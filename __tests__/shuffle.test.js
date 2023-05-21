const shuffle = require("../src/shuffle");


let testArray = [1, 3, 8, 62, 43]


describe("shuffle should...", () => {
  test('verify shuffle returns an array', () => {

    expect(Array.isArray(shuffle(testArray))).toBe(true)
  })

  test('verify array is same length after shuffle', () => {

    expect(testArray.length).toEqual(shuffle(testArray).length)
  })
});

// console.log(Array.isArray(copyArray(testArray)))