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