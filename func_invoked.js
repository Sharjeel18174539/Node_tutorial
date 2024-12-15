var firstName='Shameen';

(function(){
    var firstName="shameen_final";
    console.log(firstName);
}());
// anything is in the function can not be accessible outside.
console.log(firstName);

var firstName='Shameen';

(function(lastName){
    var firstName="shameen_final";
    console.log(firstName);
    console.log(lastName);
}('zujeel'));
// anything is in the function can not be accessible outside.
console.log(firstName);