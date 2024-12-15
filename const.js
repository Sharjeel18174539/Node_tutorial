function Person(firstName, lastName){
    this.firstName=firstName;
    this.lastName=lastName;
}

Person.prototype.greet = function(){
    console.log('Hello, '+ this.firstName+ ' ' + this.lastName)
}
var shameen= new Person('Zumeen','Sharjeel');
shameen.greet();

 var shameen2=new Person('Sharjeel', 'Zumeen');
 shameen2.greet();

 console.log(shameen.__proto__);
 console.log(shameen2.__proto__);
 console.log(shameen.__proto__ === shameen2.__proto__);
