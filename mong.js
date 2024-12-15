

function add(a , b){
    return a+b;
}
var add = function (a,b){
    return a+b;
}

var result = add(7,89);
console.log(result);

var fs=require("fs");
var os=require("os");
var user=os.userInfo();
console.log(user);
console.log(user.username);


fs.appendFile('message.txt', ' data to append \n', (err) => {
    if (err) throw err;
    console.log('The "data to append " was appended to file!');
  }); 



const notes=require('./notes.js');
console.log("server file is available");

var age =notes.age;
var result =notes.addNumber(age+18, 10);

console.log(age);
console.log('result is now '+result);



var _ = require('lodash');
var data=["helo", "helo",1,2,4,5,5,5,7,"me","Shameen", "me"];
console.log(_.uniq(data));





app.get('/chicken', function (req, res) {
  res.send('I love to serve chicken... It is really delicious') 
})

app.get('/Idli', function (req, res) {
    var customized_idli = {
        taste:"Spice",
        type:"2",
        is_chutney:true,
        is_sambar:false
    }
  res.send( customized_idli);
})

app.get('/samosa', function (req, res) {
  res.send('North Indian food with spicy taste')
})

app.get('/Pizza', function (req, res) {
  res.send('Italian food')
})
