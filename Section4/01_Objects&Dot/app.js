var person = new Object();

// Adding some properties
person["firstname"] = "John";
person["lastname"] = "Doh";


var firstNameProperty = "firstname";
console.log(person);
console.log(person[firstNameProperty]);

// Dot notation
console.log(person.firstname);
console.log(person.lastname);

// Creating a new object
person.address = new Object();
person.address.street =  "111 Main St.";
person.address.city = "New York";
person.address.state = "NY";
console.log(person.address.street);

console.log(person.address.city);
console.log(person["address"]["state"]);

/*

 Objects are name/value pairs sitting in memory.

 Objects can contain functions, known as methods.

 Dot notation is the preferred way of referring to object properties.

 Object literal notation {} is the preferred way to create objects.

 */

console.log("====================================");

var animal = {
    type: 'dog',
    name: 'Lacy'
}
console.log(animal);

// Add new properties on the fly
animal.colour = 'black&white';

// New method
animal.sayHello = function() {
    return "WOOF";
};

console.log(animal.colour);
console.log(animal.sayHello());

animal.owner = {
    name: 'John',
    age: 27
}
console.log(animal.owner.name);
console.log(animal.owner.age);







