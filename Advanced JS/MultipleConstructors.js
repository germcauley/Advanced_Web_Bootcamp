function Car(make, model,year){
    this.make = make;
    this.model = model;
    this.year = year;
}


function Person (firstName, lastName, favouriteColor, favouriteNumber){
        this.firstName =firstName;
        this.lastName=lastName;
        this.favouriteColor=favouriteColor;
        this.favouriteNumber=favouriteNumber;
        this.multiplyFavouriteNumber= function(num){
            return num * this.favouriteNumber;
        }
}

function Parent(firstName, lastName, favoriteColor, favoriteFood){
    this.firstName = firstName;
    this.lastName = lastName;
    this.favoriteColor = favoriteColor;
    this.favoriteFood = favoriteFood;
}

function Child(firstName, lastName, favoriteColor, favoriteFood){
   Parent.apply(this,arguments);
   //Parent.call(this,firstName, lastName, favoriteColor, favoriteFood);
}