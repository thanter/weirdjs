(function() {

    var person = {
        firstname: 'Default',
        lastname: 'Default',
        getFullname: function() {
            return this.firstname + ' ' + this.lastname;
        }
    }

    console.log(person.getFullname());


    var john = {
        firstname: 'John',
        lastname: 'Doe'
    }
    john.__proto__ = person;


    // Whichever object originated the call will be what is referenced to by 'this'.
    // So in the above instance, 'this' will point to the john object, not the person object.
    console.log(john.getFullname());

    var jane = {
        firstname: 'Jane'
    }
    jane.__proto__ = person;
    console.log(jane.getFullname());
})();