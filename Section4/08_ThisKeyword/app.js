(function() {
    console.log(this);          // refers to global obj (window)

    function greet() {
        // refers to global obj
        console.log(this);
        this.newVar = "test";
    }

    greet();
    // Following three are exactly the same thing
    console.log(newVar);            // test
    console.log(this.newVar);       // test
    console.log(window.newVar);     // test
    console.log('---------------------');


    var anonymousGreet = function() {
        // Again the global obj
        console.log(this);
    }
    anonymousGreet();
    console.log('---------------------');

    /*
     In the above function statement & function expression, the 'this' keyword is still pointing to the global object 'window'.
     This is because we haven't assigned it to anything else.
     So, when we assign this.newVar = 'test' inside of function greet(), it is actually being attached to the window object
     and intruding on the global namespace.
     This can cause a lot of problems if you don't know it is happening.
     */


    // When 'this' is not the global obj
    var person = {
        name: 'John',
        log: function() {

            var self = this;
            console.log("My name is " + this.name);         // 'this' now refers to the current object 'person'
            // My name is John

            var changeName = function(newName) {
                // **!!** CAUTION **!!**
                // Inside this function expression, 'this' refers again to THE GLOBAL OBJ!!
                // WTF!!!!? I KNOW RIGHT?
                this.name = newName;

                // In order the avoid this issue we have assigned 'this' to
                // a new variable called 'seld' (You can name it whatever you want)
                // Use the self var to make things clearer
                self.name = newName
            }

            changeName("Houston");
            console.log("My name is " + this.name);     // Houston
            // or
            console.log("My name is " + self.name);     // Houston

        }
    }


    // Just calling it
    person.log();
})();
