// Exercise 1: Write an arrow function that returns the string "Hello Radness"
const sayHello = () => "Hello Radness";
console.log(sayHello());

// Exercise 2: Write an arrow function that expects an array of integers, 
// and returns the sum of the elements of the array. 
// Use the built-in method reduce() on the array argument.
const sumArray = (arr) => arr.reduce((total, current) => total + current, 0);

const integers = [3, 234, 7, 23, 76];
console.log(sumArray(integers)); 


// Run the following code with Node to see the result. 
// Then refactor any of the capable function(s) with arrow functions. 
// The code should still work 😉



// const Animal = function(animal, sound, delay) {
//   this.animal = animal;
//   this.sound = sound;
//   this.delay = delay;
// }

// Animal.prototype.greet = function() {
//   setTimeout(function() {
//     console.log(`Hi, I am a ${this.animal}...${this.sound}`);
//   }.bind(this), this.delay);
// };

// const dog = new Animal('Dog', 'Bark', 3000);
// const cat = new Animal('Cat', 'Meow', 200);
// dog.greet();
// cat.greet();
// Refactored code using arrow functions
const Animal = function (animal, sound, delay) {
    this.animal = animal;
    this.sound = sound;
    this.delay = delay;
  };
  
  Animal.prototype.greet = function () {
    setTimeout(() => {
      console.log(`Hi, I am a ${this.animal}...${this.sound}`);
    }, this.delay);
  };
  
  const dog = new Animal('Dog', 'Bark', 3000);
  const cat = new Animal('Cat', 'Meow', 200);
  dog.greet();
  cat.greet();
  