(function() {

    function Person(firstName, lastName) {

        console.log(this); // actually refers to the new empty object

        this.firstName = firstName;
        this.lastName = lastName;
    }


    var john = new Person('John', 'Doh');
    console.log(john);

    var jane = new Person('Jane', 'Doooh');
    console.log(jane);

    console.log('----------------------------------------------------');
    /*
    Every function in js is an object and has some predefined properties
    eg: name, code and prototype
    The prototype property is an object which initially is empty. (Person.prototype --> {})
    When a function is used as a function constructor, its prototype IS (kind of 'points' to)
    the __proto__ property of all objects CREATED FROM this function constructor.

    As stated, the 'prototype' is an object itself, so I can add new functions/properties, eg:
     */

    Person.prototype.sayMyName = function() {
        return this.firstName + " " + this.lastName;
    }

    // And because prototype IS the __proto__ property I can do the following:
    console.log(john.sayMyName());
    console.log(jane.sayMyName());

    // (Side note: the 'john' object does not have a 'sayMyName' function, so js looks for this function
    // to the __proto__ property of this object, which actually is the Person.prototype. TA DA!!!!)

    /*
    You see what i did? I added a new method (sayMyName) to ALL objects derived from that function constructor
    This is sweet.
     */


    console.log('=====================================================');

    Person.prototype.testThis = function() {
        console.log("I am:");
        console.log(this);      // Person object calling the testThis method

        return function() {
            console.log("Now I am called and I am:");
            console.log(this);      // inside this function expression 'this' refers to the global object
        }
    }


    var inner = john.testThis();    // I am Person{}
    inner();                    // Now I am called and I am: window {}
})();