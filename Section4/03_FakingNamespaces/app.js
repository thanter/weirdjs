(function() {
    var greet = "Hello";
    var greet = "Hola";

    console.log(greet);     // Hola

    // Use objects to replicate namespaces
    // I want the english greeting or I want the spanish greeting
    var english = {
        greet: 'Hello'
    }

    var spanish = {
        greet: 'Hola'
    }

    console.log(english.greet);
    console.log(spanish.greet);
})();

/* Framework Aside - Faking namespaces
    In Javascript and many of it's popular frameworks, we can 'fake'
    namespaces by using objects to contain our key/value pairs and
    reference them as above.
    This allows us to ensure we will not overwrite previously assigned variables and
    also to replicate the 'namespaces' of other programming languages.
 */