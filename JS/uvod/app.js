// Auto, make,model,maxSpeed, currentSpeed, drive, brake, stop.
// vozi - tretnutu brzinu za 20
// koci - smanji brzinu za 10
// stop - brzina 0

//160, i treba smanji brzinu do 120, i da stane

const car = {
  make: "Audi",
  model: "a3",
  maxSpeed: 220,
  currentSpeed: 0,
  drive: function (value) {
    if (this.currentSpeed + value > this.maxSpeed) {
      alert("Ide preko ogranicenja");
    } else {
      this.currentSpeed += value;
    }
  },
  brake: function (value) {
    this.currentSpeed -= value;
  },
  stop: function () {
    this.currentSpeed = 0;
  },
};

car.drive(180);
car.drive(20);
console.log(car);

//currentSpeed: 110
