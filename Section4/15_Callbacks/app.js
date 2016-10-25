(function() {

    function whatever(callback) {

        console.log("I am doing my work now");

        // When the current function is done it calls our callback
        callback();
    }


    // The function you call/invoke 'calls back' the function
    // you gave it as argument when it finishes.
    whatever(function() {
        console.log("i am the last of my kind");
    });
})();