
var greeting = 'Holla';         // variable in global scope


(function(global, name) {

    // this has nothing to do with the global greeting var
    // this IIFE creates its own execution context
    var greeting = "Hello";

    // If you want to mutate the global object, it is a good practice
    // to pass the global object as parameter and do something like:
    // global.greeting = "Hiya";

    // DON'T access the global object karfota
    // eg: windows.greeting = "Hiya";

    console.log(greeting + " " + name);

})(window, 'Thanasis');


console.log(greeting);          // this is hola OR Hiya

/*
 The reason Immediately Invoked Function Expressions are so useful and so commonly used,
 is that they allow us to create a new execution context with its own limited variable scope.

 This means we protect the code in our IIFE from colliding with anything in the global execution context.
 */