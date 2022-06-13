// const person = {
//   name: "John Doe",
//   age: 22,
//   getFirstName: function () {
//     console.log(this);
//   },
// };

// const car = {
//   name: "Audi",
// };
// function sayHello() {
//   console.log(`Hello ${this.name}`);
// }

// sayHello.call(car);

let hrana = { food: "Pizza" };

function favFood(text, rating) {
  return `${this.food} ${text} ${rating}`;
}

console.log(favFood.call(hrana, "je ukusna", 9));

console.log(favFood.apply(hrana, ["nije ukusna", 6]));

const bindFunc = favFood.bind(hrana);

console.log(bindFunc("nije nesto", 9));

const ime = "John doe";
const zanimanje = "ubica";
const godine = 40;

console.log(`${ime} je ${zanimanje} i ima ${godine} godina`);

const numArray = [10, 30, 50, 100, 200, 1000];

console.log(Math.max.apply(null, numArray));
