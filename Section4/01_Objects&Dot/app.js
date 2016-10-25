var person = new Object();

person["firstname"] = "Tony";

person["lastname"] = "Alicea";

var firstNameProperty = "firstname";

console.log(person);

// console.log(person[firstNameProperty]);

console.log(person.firstname);
console.log(person.lastname);

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

 Dot notation is the preffered way of reffering to object properties.

 Object literal notation {} is the preferred way to create objects.

 */

console.log("====================================");

var animal = {
    type: 'dog',
    name: 'lacy'
}
console.log(animal);

// Add new properties on the fly
animal.colour = 'black';

// New method
animal.sayHello = function() {
    return "WOOF";
};

console.log(animal.colour);
console.log(animal.sayHello());

animal.owner = {
    name: 'Thanasis',
    age: 27
}
console.log(animal.owner.name);
console.log(animal.owner.age);







