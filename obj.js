const greet = require("./greet");

var person = {
    firstName:'Sharjeel',
    lastName:'Farooqui',
    greets : function(){
        console.log("Hello " + this.firstName +' ' + this.lastName);
    }
};
person.greets();
console.log(person['firstName']);