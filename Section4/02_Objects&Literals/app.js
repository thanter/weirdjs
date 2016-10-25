(function() {
    var me = {
        name: 'Thanasis',
        age: 27,
        address: {
            street: 'Perdika 98',
            city: 'Thessaloniki'
        }
    };

    console.log(me);

    function status(person) {
        console.log(
            person.name + ' lives in ' + person.address.city
        );
    }

    status(me);

    status({
        name: 'Angie',
        address: {
            street: 'Kommita',
            city: 'Almyros'
        }
    });
})();
/*
 In JavaScript, object literal syntax is generally preferred to the object construtor function.
 It is much quicker to write, performs slightly better and is much easier to read.
 Object literal syntax also allows us to create new objects on the fly, as in line 21.
 */