(function() {

    function greet(typeOfGreeting) {

        return function(name) {
            console.log(typeOfGreeting + " " + name);
            // typeOfGreeting does not exist in this anonymous function expression
            // so JS looks at the immediate outer environment.
            // Function 'greet' provides the typeOfGreeting variable
        };

    }

    var sayHelloTo = greet("Hello");        // returns a function
    sayHelloTo('Thanasis');

    var sayHiyaTo = greet("Hiya");          // returns a function
    sayHiyaTo('Angie');

})();


/*
 Closures allow functions inside of other functions to have access to variables in the outer function,
 EVEN after the outer functions have completed running******

 This is why in the above example, our function sayHelloTo(); has access to the typeOfGreeting variable, even after the greet()
 function has returned the inner anonymous function and it's execution context has finished running.
 The sayHelloTo() execution context still contain a reference to its outer environment and because of closure, it will
 still find the typeOfGreeting variable there.

 In normal circumstances, the javascript engine will clean out the memory space of past execution contexts.
 */