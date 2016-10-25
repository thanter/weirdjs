(function() {

    var a = 3;
    var b = a;      // by value, the value is copied

    console.log(a);
    console.log(b);

    b = 5;          // if I change b, a is intact
    console.log(a);
    console.log(b);
    console.log("----------------------");


    // All objects (including functions) are by REFERENCE
    var person = {
        name: 'Thanasis'
    };

    var animal = person;

    console.log(person);
    console.log(animal);

    animal.name = "Kate";   // mutate (change something)
    console.log(animal);

    // person object is changed as well
    console.log(person);
    console.log("----------------------");


    function changeNameAgain(obj) {
        obj.name = "Petros";
    }
    changeNameAgain(animal);
    console.log(animal);
    console.log(person);

    // equals operator sets up new memory space (new address)
    // completely different object
    var anotherPerson = {
        name: "John"
    };
    console.log(anotherPerson);
})();


/*
 In JavaScript, primitive values (numbers, strings, Booleans, Undefined & Null) are set by value.
 This means that on line 3 & 4, when we set variable b = a, we are actually
 creating another space in memory that has the same value.
 By contrast, objects and functions are set by reference,
 which means that on line 18, when we set d = c, we are pointing
 to the same memory space as c.
 If we make any changes, or 'mutate', variable c, it will also apply to d.
 */