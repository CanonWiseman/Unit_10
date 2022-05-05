const arr = [1,2,3,4,5];
const double = arr => arr.map(val => val + 2);

const squareAndFindEvens = numbers => numbers.map(val ** 2).filter(square => square => % 2 === 0)