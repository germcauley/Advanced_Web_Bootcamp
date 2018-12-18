// Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object) and returns the maximum number of cakes Pete can bake (integer). 
// For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). 
// Ingredients that are not present in the objects, can be considered as 0.


function cakes(obj1,obj2){

    var keys = Object.keys(rec);
    var keys1 = Object.keys(ing);
    console.log(keys);
    console.log(keys1);
    //console.log(compareKeys(keys,keys1));
    console.log(getCakeNum(rec,ing));
    //compare the keys

    //Need to check that each key in rec are in ing
    function compareKeys(recipe,ingredients){
        var x = true;
        recipe.forEach(function(val){
            console.log(val + " is val ");
            if(ingredients.indexOf(val) !=-1){
                x = true;        
            }
            else{
                x =false;      
            }  
        });
        return x;
    }

    //compare value for each key in recipe to ing
    function getCakeNum(recipe,available){
        var cakes = [];
        Object.keys(recipe).forEach(function(key) {
            
            console.log("Recipe: "+key+" "+ recipe[key]);
            console.log("Ingredients: "+key+" "+ available[key]);
            cakes.push(available[key] / recipe[key]);
            cakes.sort();
            //ingredient / recipe to get how much of each you have
            //return lowest number as the number of cakes depends on this
          });
          return Math.floor(cakes[0]);
    }
}










var rec = {flour: 500, sugar: 200, eggs: 1};
var ing = {flour: 1200, sugar: 1200, eggs: 5, milk: 200};
cakes(rec,ing);