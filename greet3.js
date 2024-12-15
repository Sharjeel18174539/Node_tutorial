function Greetr(){
    this.greeting="Hello Sharjeel";
    this.greet = function(){
        console.log(this.greeting);
    }
}

module.exports = new Greetr();