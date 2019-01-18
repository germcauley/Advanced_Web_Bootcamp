function House(bedrooms, bathrooms, numSqFt){
    this.bedrooms = bedrooms;
    this.bathrooms = bathrooms;
    this.numSqFt = numSqFt;
}

var firstHouse = new House(2, 2, 1000);
var secondHouse = new House(12, 2, 999);


function Dog(name, age){
    this.name = name;
    this.age = age;
    this.bark = function(){
        console.log(this.name + " says bark!");
    }
}
var dog1 = new Dog("Rover", 2);

var dog2 = new Dog("Sam", 4);
