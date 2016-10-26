
var greeting = 'Hola';         // variable in global scope


(function(global, name) {

    // this has nothing to do with the global 'greeting' var
    // this IIFE creates its own execution context
    var greeting = "Hello";

    console.log(greeting + " " + name); // Hello John


    // If you want to mutate the global object, it is a good practice
    // to pass the global object as parameter and do something like:
    // global.greeting = "Hiya";

    // DON'T access the global object like this:
    // eg: windows.greeting = "Hiya";

})(window, 'John');


console.log(greeting);  // Hola

/*
 The reason Immediately Invoked Function Expressions are so useful and so commonly used,
 is that they allow us to create a new execution context with its own limited variable scope.

 This means we protect the code in our IIFE from colliding with anything in the global execution context.
 */