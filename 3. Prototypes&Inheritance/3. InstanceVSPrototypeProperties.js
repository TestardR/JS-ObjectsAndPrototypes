'use strict';

// Definitions: 
// A function's prototype: A function's prototype is the object instance 
// will become the prototype for all objects created using this function
// as a constructor

// An object's prototype: An object's prototype is the object instance 
// from which the object is inherited

// A prototype is not like a class, it is an object. So when 
// a function is created, it gets a prototype created and attached to it
// behind the scene. If that function is used as a constructor to create an object,
// the object that is created has a proto property that is pointing to the same object
// that is the function prototype. 

function Cat(name, color){
  this.name = name
  this.color = color
}

Cat.prototype.age = 4

var fluffy = new Cat('Fluffy', 'White')
var muffin = new Cat('Muffin', 'Brown')

// fluffy.age = 5

display(fluffy.age)
display(fluffy.__proto__.age)
display(muffin.age)

// Before setting fluffy's age to 5, fluffy never had an age property, 
// its prototype did.
display(Object.keys(fluffy))
display(fluffy.hasOwnProperty('age'))