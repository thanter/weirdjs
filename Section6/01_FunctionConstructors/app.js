(function() {

    // Function constructor
    // returns new object
    function Person(firstName, lastName) {
        console.log(this); // actually refers to the new empty object

        this.firstName = firstName;
        this.lastName = lastName;

        // when called with 'new', returns this
    }


    var me = new Person('Thanasis', 'Nterelis');
    console.log(me);

    var angie = new Person('Angie', 'Papastergiou');
    console.log(angie);

    /*
    The Person function is a normal function. Nothing new here.
    But it is called with the 'new' keyword. This means:
    1. the 'new' keyword creates initially an empty object: Person {}
    2. Inside the Person function, this refers to the current object. Not global as usually.
    3. The function returns 'this' automatically.
     */

})();