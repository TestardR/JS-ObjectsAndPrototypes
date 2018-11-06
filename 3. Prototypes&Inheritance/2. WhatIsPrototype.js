'use strict';

// 1. Define a property to a prototype

// var arr = ['red', 'blue', 'green']
// // var last = arr[arr.length-1]
// // display(last)

// Object.defineProperty(arr, 'last', {get: function(){
//   return this[this.length-1]
// }})
// var last = arr.last
// display(last)

// To make this method property available to all arrays,
// we have to use prototypes

// var arr = new Array('red', 'blue', 'green')
// var arr = ['red', 'blue', 'green']
// var arr2 = ['one', 'two', 'three']

// Object.defineProperty(Array.prototype, 'last', {get: function(){
//   return this[this.length-1]
// }})

// display(arr.last)
// display(arr2.last)

// 2. What is a Proptotype ?
// A prototype is an object that exists on every functions in JS

// var myFunc = function() {}  
// display(myFunc.prototype) // gives an empty object

// objects do not have prototype properties
// var cat = {name: 'Fluffy'}
// // display(cat.prototype) undefined
// display(cat.__proto__);


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

// function Cat(name, color){
//   this.name = name
//   this.color = color
// }
// var fluffy = new Cat('Fluffy', 'White')

// Cat.prototype.age = 3

// display(Cat.prototype)
// display(fluffy.__proto__)
// // They are pointing to the same instance of an object
// display(Cat.prototype === fluffy.__proto__)

// var muffin = new Cat('Muffin', 'Brown')
// display(muffin.__proto__)

