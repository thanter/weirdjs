(function() {
    // Function statement
    function greet() {
        console.log("Hi");
    }
    greet();

    // Function expression
    var anonymousGreet = function() {
        console.log("hello");
    }
    anonymousGreet();

    /*
     An IIFE (immediately invoked function expression) allows us to create a function on the fly and invoke it immediately
     after creating it.
     */

    // IIFE
    var greeting = (function(name) {
        return "Hello " + name;
    })('John');

    // The function has already been called, with the argument 'John'
    console.log(greeting);  // Hello John



    (function() {
        console.log("nobody called me, I ran on my own");
    })();
})();