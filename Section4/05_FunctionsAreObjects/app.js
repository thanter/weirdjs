(function() {

    function greet() {
        console.log("hello my good friend");
    }

    console.log(typeof greet);      // function, special type of object

    // I can attach properties, like any other object
    greet.language = "english";

    console.log(greet.language);
})();

/*
 JavaScript is a language that has first class functions.
 In JavaScript, functions ARE objects.
 This means that everything you can do with other types, you can do with functions.
 You can assign functions to variables, pass them around and create them on the fly.
 -----
 Because functions are objects, you can attach primitive types, object and other functions to them.
 They also have other special properties, such as its name (which is optional) and its code property (which is invokable),
 which is where your actual code of the function sits.
 */