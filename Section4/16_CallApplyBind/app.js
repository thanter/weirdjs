(function() {

    var person = {
        firstName: 'John',
        lastName: 'Doh',
        fullName: function() {
            return this.firstName + " " + this.lastName;
        }
    }

    var logName = function() {

        // normally 'this' refers to the global obj
        // what if i want to be a different obj?
        // I bind the different object to this function
        console.log(this);
        console.log('Logged: ' + this.fullName());
        console.log('-----------------');

    };

    var logPersonName = logName.bind(person);           // this will refer to person obj
    // And now i call the function
    logPersonName();
    /*
     ---- bind -----
     What we are doing above is using the .bind method. What this method does is returns a new copy of
     the original function and sets up a new function object.
     It controls what the 'this' keyword refers to, rather than using the default.
     */


    var person2 = {
        firstName: 'John2',
        lastName: 'Doh2',
        fullName: function() {
            return this.firstName + " " + this.lastName;
        }
    }
    logName.call(person2);
    logName.call();
})();