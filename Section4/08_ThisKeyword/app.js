(function() {
    console.log(this);          // refers to global obj

    function greet() {
        // refers to global obj
        console.log(this);
        this.newVar = "thanasis";
    }

    greet();
    console.log(newVar);
    console.log(this.newVar);
    console.log(window.newVar);
    console.log('---------------------');


    var anonymousGreet = function() {
        // Again the global obj
        console.log(this);
    }
    anonymousGreet();
    console.log('---------------------');
    /*
     In the above function statement & function expression, the this keyword is still pointing to the global object 'window'.
     This is because we haven't assigned it to anything else.
     So, when we assign this.newVar = 'thanasis' inside of function greet(), it is actually being attached to the window object
     and intruding on the global namespace. This is can cause a lot of problems if you don't know it is happening.
     */


    // When 'this' is not the global obj

    var person = {
        name: 'thanasis',
        log: function() {

            var self = this;
            console.log("My name is " + this.name);         // this refers to the current object 'person'
            // My name is thanasis

            var changeName = function(newName) {
                // inside this function expression, 'this' refers again to THE GLOBAL OBJ
                // WTF!!!! I KNOW RIGHT?
                this.name = newName;

                // use the self var to make things clearer
                self.name = newName
            }
            changeName("Petrooooooos");
            console.log("My name is " + this.name);
            // or
            console.log("My name is " + self.name);

        }
    }


    person.log();
})();
