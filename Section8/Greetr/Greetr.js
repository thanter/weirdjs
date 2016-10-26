;(function(global , $) {

    // 'new' a Greetr object
    var Greetr = function (firstName, lastName, language) {
            return new Greetr.init(firstName, lastName, language);
        },

        // hiden within the scope of the IIFE and never directly accessible
        supportedLangs = ['en', 'es'],

        // informal greetings
        greetings = {
            'en': 'Hello',
            'es': 'Hola',
        },

        // formal greetings
        formalGreetings = {
            'en': 'Greetings',
            'es': 'Saludos',
        };


    // Prototype holds all my methods
    Greetr.prototype = {
        // 'this' refers to the calling object (using a function constructor)
        fullName: function () {
            return this.firstName + " " + this.lastName;
        },

        // make sure its a valid language
        validate: function() {
            if (supportedLangs.indexOf(this.language) === -1) {
                throw "Invalid language";
            }
        },

        // informal greeting
        greeting: function() {
            return greetings[this.language] + ' ' + this.firstName;
        },

        // formal greeting
        formalGreeting: function() {
            return formalGreetings[this.language] + ' ' + this.fullName();
        },

        setLang: function(lang) {
            this.language = lang;
            this.validate();

            return this;    // chainable methods
        },

        greet: function(formal) {
            var msg;

            if (formal) {
                msg = this.formalGreeting();
            }
            else {
                msg = this.greeting();
            }

            console.log(msg);
            return this;    // chainable methods
        },


        HTMLGreet: function(selector, formal) {

            if (!$) {
                throw 'JQuery not loaded';
            }

            if (!selector) {
                throw 'No selector provided';
            }

            var msg;
            if (formal) {
                msg = this.formalGreeting();
            }
            else {
                msg = this.greeting();
            }

            $(selector).html(msg);

            return this;    // chainable methods
        }
    };


    Greetr.init = function(firstName, lastName, language) {
        var self = this;

        self.firstName = firstName || '';
        self.lastName = lastName || '';
        self.language = language || 'en';

        self.validate();
    }




    // I 've been using Greetr.prototype just for convenience
    // What i really want is to have all this functionality to the
    // Greetr.init.prototype object.
    Greetr.init.prototype = Greetr.prototype;

    // Expose Greetr to global obj
    global.Greetr = global.G$ = Greetr;
})( window, jQuery );