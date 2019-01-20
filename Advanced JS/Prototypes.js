function Vehicle(make,model,year){
    this.make=make;
    this.model=model;
    this.year=year;
    this.isRunning = false;
}

Vehicle.prototype.turnOn = function(){
    this.isRunning =true;
}

Vehicle.prototype.turnOff = function(){
    this.isRunning =false;
}

Vehicle.prototype.honk = function(){
    if(this.isRunning){
        return "Beep";
    }
}

var car = new Vehicle("VW","GOLF","1999");


function Person(firstname,lastName,favouriteColour,favouriteNumber){
   this.firstname=firstname;
   this.lastName=lastName;
   this.favouriteColour=favouriteColour;
   this.favouriteNumber=favouriteNumber;
   this.family = [];
}

Person.prototype.fullName = function(){
    return this.firstname+" "+this.lastName;
}

Person.prototype.addToFamily = function(person){
    if(this.family.indexOf(person) ===-1 && person instanceof Person){
        this.familypush(person);
    }
    return this.family.length;
}

Array.prototype.map = function(callback){
    var newArr = [];
    for(var  i =0; i <this.length; i++){
        newArr.push(callback(this[i], i, this))
    }
    return newArr;
}

String.prototype.reverse = function(){
    var newStr = '';
    for(var i = this.length -1; i>=0; i--){
        newStr += this[i];
    }
    return newStr;  
}



var person1 = new Person("Gerald","McAuley","orange",29);