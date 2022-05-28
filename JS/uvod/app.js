// const DATA1 = [2, 26, 38, 75, 11, 29];
// const DATA2 = ["a", "b", "c", "d", "e"];

const mutateArrays = (array1, array2) => {
  //1. DEO ZADATKA
  const helper = array1.concat(array2);

  //2 DEO ZADATAKA
  const parni = [];

  for (const el of helper) {
    if (el % 2 === 0) {
      parni.push(el);
    }
  }

  parni.unshift(10, 20);

  //3 DEO ZADATKA
  return [helper, parni];
};

// console.log(mutateArrays(DATA1, DATA2));

//FILTER METODA
// const words = ["televizor", "daljinski", "telefon", "voda", "ranac", "stolica"];
// const numbers = [2, 8, 9, 11, 26, 85, 86, 90, 102, 1003, 1120];
// const booleans = [true, false, true, false];

// const filteredArray = words
//   .concat(numbers)
//   .concat(booleans)
//   .filter((el) => typeof el === "boolean");

// console.log(filteredArray);

//MAP METODA

// const numbers = [2, 5, 3, 1, 10, 8, 7];

// const squareNumbers = numbers.map((el, index, array) => {
//   if (index === 0 || index === 3 || index === 5) {
//     return el * el;
//   }
//   return el;
// });

// console.log(squareNumbers);

const DATA1 = [1, 3, 4, 2, 7, 6];

//el > 2 = el * 7
// el > 2 && el < 8 = (el*4) / 2

const dogAgeToHuman = (ages) => {
  const humanAge = ages.map((age) => {
    if (age > 2 && age < 8) {
      return (age * 4) / 2;
    } else if (age > 2) {
      return age * 7;
    } else {
      return age;
    }
  });

  const lessThan10HumanAge = humanAge.filter((el) => el < 10);
  return [humanAge, lessThan10HumanAge];
};

console.log(dogAgeToHuman(DATA1));
