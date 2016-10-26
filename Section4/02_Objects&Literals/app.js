(function() {
    // Creating object using an object literal
    var john = {
        name: 'John',
        age: 27,
        address: {
            street: 'Main Str. 111',
            city: 'New York'
        }
    };

    console.log(john);

    // Function that accepts an object as a parameter
    function status(person) {
        console.log(
            person.name + ' lives in ' + person.address.city
        );
    }

    status(john);

    // OR
    status({
        name: 'Jane',
        address: {
            street: 'Secondary Str. 222',
            city: 'Chicago'
        }
    });
})();
/*
 In JavaScript, object literal syntax is generally preferred to the object constructor function.
 It is much quicker to write, performs slightly better and is much easier to read.
 Object literal syntax also allows us to create new objects on the fly, as in line 22.
 */