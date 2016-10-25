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
    var greeting = function(name) {
        return "Hello " + name;
    }('thanasis');

    // The function is already called, with the argument 'thanasis'
    console.log(greeting);              // Hello thanasis

    (function() {
        console.log("nobody called me, i ran on my own");
    }());
})();