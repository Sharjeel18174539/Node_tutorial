
exports = function(){
    console.log('Hello');
}
console.log(module.exports);
console.log(exports);

// object properties 
var obj={
    greet:'Hello'
}
console.log(obj['greet']);
console.log(obj.greet);
var me='greet';
console.log(obj[me]);

// function and array
var arr=[];
arr.push(function(){
    console.log("Hello sharjeel");
});
arr.push(function(){
    console.log("Hello Ammi");
});
arr.push(function(){
    console.log("Hello abbu");
});
arr.push(function(){
    console.log("Hello shameen");
});
arr.push(function(){
    console.log("Hello zumeen");
});

arr.forEach(function(item){
    item();
})
