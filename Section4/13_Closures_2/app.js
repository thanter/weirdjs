(function() {

    function buildFunctions() {
        var arr = [];


        for (var i = 0; i < 3; i++) {
            arr.push(
                function() {
                    console.log(i);
                }
            );
        }

        return arr;
    }


    var functions = buildFunctions();
    functions[0]();
    functions[1]();
    functions[2]();
    console.log('-------------------------------------------');

    /*
     All 3 calls above return the number 3. This happens because:
     All three look for the variable 'i' but can't find it in the current execution context, so each of them look
     at their outer environment reference and find it as '3' in the buildFunction() execution context,
     because this is the last value it was set to by our for loop before it stopped running.
     */


    // If i want to return 0,1,2 i need to associate the inner function with a different outer environment each time.
    function buildFunctions2() {
        var arr = [];


        for (var i = 0; i < 3; i++) {
            arr.push(
                (function(j) {
                    // j is a completely new variable in the iife's scope
                    // this is automatically invoked, so j is associated with 3 different outer environments
                    return function() {
                        console.log(j);
                    }
                }(i))
            );
        }

        return arr;
    }


    var functions2 = buildFunctions2();
    functions2[0]();
    functions2[1]();
    functions2[2]();

})();