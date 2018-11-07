'use strict';

// 1. Define a property to a prototype
// 2. What is a Proptotype ?
// 3. Instance vs. prototype properties
// 4. Changing a functions' Prototype
// 5. Multiple level of inheritance





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






// 3. Instance vs. prototype properties

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



// 4. Changing a functions' Prototype


'use strict';

function Cat(name, color){
  this.name = name
  this.color = color
}

Cat.prototype.age = 4

var fluffy = new Cat('Fluffy', 'White')
var muffin = new Cat('Muffin', 'Brown')

Cat.prototype = {age: 5} // we created a new prototype

var snowbell = new Cat('Snowbell', 'White')

display(fluffy.age)
display(muffin.age)
display(snowbell.age)
display(Cat.prototype.age)




// 5. Multiple level of inheritance

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



// 6. Creating a prototype with Classes

'use strict';

class Animal {
  constructor(voice){
    this.voice = voice || 'grunt'
  }
  speak() {
    display(this.voice)
  }
}

class Cat extends Animal {
  constructor(name, color){
    super('Meow')
    this.name = name
    this.color = color
  }
}


// function Animal(voice){
//   this.voice = voice || 'grunt'
// }

// Animal.prototype.speak = function(){
//   display(this.voice)
// }

// function Cat(name, color){
//   Animal.call(this, 'Meow')
//   this.name = name
//   this.color = color
// }

// Cat.prototype = Object.create(Animal.prototype)
// Cat.prototype.constructor = Cat

var fluffy = new Cat('Fluffy', 'White')
fluffy.speak()