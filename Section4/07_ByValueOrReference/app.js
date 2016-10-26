(function() {

    var a = 3;
    var b = a;      // assigned by value, the value is copied

    console.log(a); // 3
    console.log(b); // 3

    b = 5;          // if I change b, a is intact
    console.log(a); // 3
    console.log(b); // 5
    console.log("----------------------");


    // All objects (including functions) are 'assigned' by REFERENCE
    var person = {
        name: 'John'
    };

    var animal = person;

    console.log(person);
    console.log(animal);

    animal.name = "Kate";   // mutate (change something)
    console.log(animal);

    // person object has changed as well
    console.log(person);
    console.log("----------------------");


    function changeNameAgain(obj) {
        obj.name = "Peter";
    }
    // Actually calling the function
    changeNameAgain(animal);
    console.log(animal);    // name changed
    console.log(person);    // name changed as well, still pointing to the same memory position


    // equals operator sets up new memory space (new address)
    // completely different object
    var anotherPerson = {
        name: "Jack"
    };
    console.log(anotherPerson);
})();


/*
 In JavaScript, primitive values (numbers, strings, Booleans, Undefined & Null) are set by value.
 This means that on line 4 & 9, when we set variable b = a, we are actually
 creating another space in memory that has the same value.
 By contrast, objects and functions are set by reference,
 which means that on line 20, when we set animal = person, we are pointing
 to the same memory space as person.
 If we make any changes, or 'mutate', object animal, it will also apply to person.
 */