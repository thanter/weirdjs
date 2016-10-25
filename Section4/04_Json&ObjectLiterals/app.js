(function() {
    var objectLiteral = {
        name: 'Mary',
        occupation: 'prostitute'
    }

    // Convert js object to json
    console.log(JSON.stringify(objectLiteral));


    // Make sure this is a json string dude
    var jsonString = '{ "name": "Thanasis", "occupation": "programmer" }';

    // Convert json string to js object
    console.log(JSON.parse(jsonString));
})();

/*
 JSON is Javascript Object Notation.
 It is inspired by the object literal syntax from Javascript. It is not completely identical,
 as JSON is a little bit stricter in its syntax.
 JSON is so widespread now that javascript has some inbuilt functions to convert objects into
 JSON strings and to parse JSON strings into objects.
 */