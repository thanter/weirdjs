(function() {

    function greet(firstName, lastName, language) {
        // Setting some defaults, in case a falsy value is passed
        language = language || 'en';

        if (language == 'en') {
            console.log('Hello ' + firstName + ' ' + lastName);
        }

        if (language == 'es') {
            console.log('Hola ' + firstName + ' ' + lastName);
        }
    }


    function greetEnglish(firstName, lastName) {
        greet(firstName, lastName, 'en');
    }


    function greetSpanish(firstName, lastName) {
        greet(firstName, lastName, 'es');
    }



    greetEnglish('John', 'Doh');
    greetSpanish('Jane', 'Dooooh');
})();


/*
 The above approach is one simple pattern we can use to simplify function calls.
 It is commonly used in frameworks and libraries to make it simple to see what is going on.
 We have separated the logic into our 'greet' function and then made
 two other functions that default the 'language' parameter to
 either 'en' for english or 'es' for spanish, which is then passed into our greet function.

 This means we don't have to continually pass in the language to our function calls,
 but instead use one of the two separate functions,
 which takes care of it for us.
 */