// function statement
function greet(){
    console.log("Hi ! How are you")
}
greet(); // invoke or call the function

//function are first class
function logGreeting(fn){
    fn();
}
logGreeting(greet); // invoke or call the function

// function expression 
var greetMe = function(){
    console.log("Hello");
}
greetMe();
logGreeting(greetMe);