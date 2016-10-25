(function() {
    var greet = "Hello";
    var greet = "Holla";

    console.log(greet);

    // Use objects to replicate namespaces
    // I want the english greeting or i want the spanish greeting
    var english = {
        greet: 'Hello'
    }

    var spanish = {
        greet: 'Holla'
    }

    console.log(english.greet);
})();

/* Framework Aside - Faking namespaces
 In Javascript and many of it's popular frameworks, we can 'fake'
 name spaces by using objects to contain our key/value pairs and
 reference them as above.
 This allows us to ensure we won't overwrite previously assigned variables &
 also to replicate the 'namespaces' of other programming languages.
 */