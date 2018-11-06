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