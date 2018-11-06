'use strict';

// 1. Using Bracket Notation to access and create properties
// 2. Using JS Property Descriptors
// 3. Using the Writable attribute
// 4. Using the Enumerable attribute
// 5. Using the Configurable attribute (prevents from being changed and deleted)
// 6. Using Getters and Setters

// 1. Using Bracket Notation to access and create properties
// var cat = { 
//   name: 'Fluffy', 
//   color: 'White'
// }

// display(cat.color);

// // Another way for calling properties
// display(cat['color']);

// // Another way for creating properties
// // Even though not common, you might want to do this if user enter values or 
// // if you get JSON data back not fitting your code.
// cat['Eye Color'] = 'Green'
// display(cat['Eye Color'])

// 2. Using JS Property Descriptors

// var cat = { 
//   name: 'Fluffy', 
//   color: 'White'
// }

// display(Object.getOwnPropertyDescriptor(cat, 'name'));

// 3. Using the Writable attribute

// var cat = { 
//   name: 'Fluffy', 
//   color: 'White'
// }

// Object.defineProperty(cat, 'name', {writable: false});
// cat.name = 'Scratchy' // will throw erros in strict mode
// display(Object.getOwnPropertyDescriptor(cat, 'name'));

// var cat = { 
//   name: {first: 'Fluffy', last: 'LaBeouf'},
//   color: 'White'
// }

// Object.defineProperty(cat, 'name', {writable: false});
// cat.name.first = 'Scratchy' // We can change it like this, name is non writable
// display(cat.name);

// var cat = { 
//   name: {first: 'Fluffy', last: 'LaBeouf'},
//   color: 'White'
// }

// Object.defineProperty(cat, 'name', {writable: false});
// Object.freeze(cat.name); // the whole name property (within the cat object) is not writable
// cat.name = 'Scratchy' 
// display(Object.getOwnPropertyDescriptor(cat, 'name'));
// display(cat.name);


// 4. Using the Enumerable attribute 

// var cat = { 
//   name: {first: 'Fluffy', last: 'LaBeouf'},
//   color: 'White'
// }

// Object.defineProperty(cat, 'name', {enumerable: true})

// // for ... in loop to loop in an object
// for(var propertyName in cat) {
//   display(propertyName + ": " + cat[propertyName])
// }

// display(Object.keys(cat))

// Setting enumerable to fault affects the JSON serialization of the object


// var cat = { 
//   name: {first: 'Fluffy', last: 'LaBeouf'},
//   color: 'White'
// }

// Object.defineProperty(cat, 'name', {enumerable: false})
// display(JSON.stringify(cat))

// You can still see look at the property using bracket notation
// display(cat['name'])


// 5. Using the Configurable attribute (prevents from being changed and deleted)

// var cat = { 
//   name: {first: 'Fluffy', last: 'LaBeouf'},
//   color: 'White'
// }

// Object.defineProperty(cat, 'name', {configurable: false})
// // Object.defineProperty(cat, 'name', {enumerable: false}) Not possible
// Object.defineProperty(cat, 'name', {writable: false}) // still possible tough

// delete cat.name Not possible


// 6. Using Getters and Setters

var cat = { 
  name: {first: 'Fluffy', last: 'LaBeouf'},
  color: 'White'
}

Object.defineProperty(cat, 'fullName', {
    get: function() {
      return this.name.first + ' ' + this.name.last
    }, 
    set: function(value) {
      var nameParts = value.split(' ')
      this.name.first = nameParts[0],
      this.name.last = nameParts[1]
    }
})

cat.fullName = 'Muffin Top';
display(cat.fullName)
display(cat.name.first)
display(cat.name.last)