(function() {
    // Function statement
    function greet() {
        console.log("Hi");
    }

    greet();

    // Anonymous function expression. No hoisting!!!!
    var anonymousFunc = function() {
        console.log("Hello");
    };
    anonymousFunc();


    // Passing function as argument
    function log(a) {
        a();
    }

    // Function expressions again
    log(function() {
        console.log("I am a");
    });
    log(function() {
        console.log("I am b");
    });

})();

/*
 Statement:
 A piece of code that just does work but DOES NOT RETURN A VALUE, e.g. an if statement.

 Expression:
 A piece of code that RESULTS IN A VARIABLE. It doesn't have to save to a variable.
 */