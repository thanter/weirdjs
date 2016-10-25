(function() {

    function makeGreeter(language) {

        language = language || "en";

        return function(firstName, lastName) {
            if (language === 'en') {
                console.log("Hello " + firstName + ' ' + lastName);
            }

            if (language === 'es') {
                console.log("Holla " + firstName + ' ' + lastName);
            }
        };

    }

    var englishGreeter = makeGreeter();
    englishGreeter("Thanasis", "Nterelis");

    var englishGreeter = makeGreeter('en');
    englishGreeter("Thanasis", "Nterelis");

    var spanishGreeter = makeGreeter('es');
    spanishGreeter("Thanasis", "Nterelis");
})();


/*
 In this example, we rely on closures to create a 'function factory'.
 What is happening is that each time we run makeGreeting, a seperate execution context is created
 and we are passing a different language argument to it.
 The makeGreeting function returns the inner annonymous function and then is popped off the stack,
 it does this twice. Once for each time it is called on lines 18 & 19.
 We then set the inner annonymous functions to variables greetEnglish and greetSpanish on lines 21-22.
 The inner functions it returns contain a different outer reference to
 each memory space that is created, which both contain different values of the language argument (one with 'en' and one with 'es').
 Every time you call a function, it gets its own execution context. Any functions inside of it will
 refer to THAT memory space in their outer reference.
 */