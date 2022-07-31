// Change the Prototype to a New Object

/*

Add the property numLegs and the two methods eat() and describe() to the prototype of Dog by setting the prototype to a new object.

*/

// Solution
function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  // Only change code below this line
  numLegs: 2,
  eat: function () {
    console.log("what you prefer to eat?");
  },
  describe: function () {
    console.log("Dog name is " + this.name + ".");
  },
};
