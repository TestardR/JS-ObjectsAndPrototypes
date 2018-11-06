// 'use strict';

// To construct objects: 
// 1. Object literals
// 2. Constructor functions with the new keyword
// 3. Object.create()
// 4. ES6 classes

//1.  Object literal
// var cat = { name: 'Fluffy', color: 'White'}
// cat.age = 3
// cat.speak = function(){ display('Meoooow')}

// display(cat.name);
// display(cat.age);

// cat.speak()


// var cat = { 
//   name: 'Fluffy', 
//   color: 'White',
//   speak: function(){ display('Meoooow')},
//   age: 3
  
// }


//2.  Using construtor functions to construct JS objects
// this refers to the current object, that object is the one executing the current byte of code
// this by default is the global object
// function Cat(){
//   this.name = 'Fluffy',
//   this.color = 'White'
// }

// var cat = new Cat();

// display(cat)

// function Cat(name, color){
//   this.name = name,
//   this.color = color
// }

// var cat = new Cat('Fluffy', 'White');

// display(cat)


// 3. Object.create()
// var cat = Object.create(Object.prototype, 
//   {
//     name: {
//       value: 'Fluffy',
//       enumerable: true,
//       writable: true,
//       configurable: true
//     },
//     color: {
//       value: 'White',
//       enumerable: true,
//       writable: true,
//       configurable: true
//     }
    
//   })
  
// display(cat)

// 4. ES6 classes

// class Cat {
//   constructor(name, color){
//     this.name = name,
//     this.color = color
//   }
//   speak(){
//     display('Meeooow')
//   }
// }

// var cat = new Cat('Fluffy', 'White');

// display(cat);
// cat.speak();

