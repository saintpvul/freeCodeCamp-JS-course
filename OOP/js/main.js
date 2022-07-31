// Use Inheritance So You Don't Repeat Yourself

/*

The eat method is repeated in both Cat and Bear. Edit the code in the spirit of DRY by moving the eat method to the Animal supertype.

*/

// Solution

function Cat(name) {
  this.name = name;
}

function Bear(name) {
  this.name = name;
}

function Animal() {}

Animal.prototype = {
  constructor: Animal,
  eat: function () {
    console.log("nom nom nom");
  },
};
