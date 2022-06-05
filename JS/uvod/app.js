// console.log(numbers.find((el) => el > 5));
// console.log(numbers.findIndex((el) => el > 5));

// console.log(numbers.every((el) => el > 5));

// console.log(numbers.some((el) => el > 5));
// const numbers = [1, 4, 5, 7, 10, 15, 22, 29, 30, 50, 52];

// const evenNumbers = numbers.filter((num) => num % 2 === 0 && num < 30);

// const words = ["televizor", "telefon", "prozor", "daljinski", "sbb"];

// const newWords = words.filter((word) => word.length > 4);
// console.log(newWords);

const numbers = [9, 36, 100, 25, 64];

// const noveCene = cene.map((el) => el + 50).filter((el) => el < 600);

// const numsSqrt = numbers.map((num) => Math.sqrt(num));

const cene = [240, 520, 380, 525, 780];

console.log(cene.reduce((prevValue, currValue) => prevValue + currValue, 300));

//1. prev: 0, current: 240;
//2. prev: 240, current: 520;
//3. prev: 760, current: 380;
//4. prev: 1140, current: 525;
//5. prev: 1665, current: 780;
//6. prev: 2445: current: 0;
