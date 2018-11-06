'use strict';

function Cat(name, color){
  this.name = name
  this.color = color
}

Cat.prototype.age = 4

var fluffy = new Cat('Fluffy', 'White')

display(fluffy.__proto__)
display(fluffy.__proto__.__proto__) // the cat prototype has a prototype
// by default all objects in JS inherit from object and object has no prototype