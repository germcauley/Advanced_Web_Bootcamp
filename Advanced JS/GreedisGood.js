// Greed is a dice game played with five six-sided dice. 
// Your mission, should you choose to accept it, is to score a throw according to these rules.
//  You will always be given an array with five six-sided dice values.

//  Three 1's => 1000 points
//  Three 6's =>  600 points
//  Three 5's =>  500 points
//  Three 4's =>  400 points
//  Three 3's =>  300 points
//  Three 2's =>  200 points
//  One   1   =>  100 points
//  One   5   =>   50 point

// A single die can only be counted once in each roll. 
// For example, a "5" can only count as part of a triplet (contributing to the 500 points) or as a single 50 points, but not both in the same roll.

// Example scoring

//  Throw       Score
//  ---------   ------------------
//  5 1 3 4 1   50 + 2 * 100 = 250
//  1 1 1 3 1   1000 + 100 = 1100
//  2 4 4 5 4   400 + 50 = 450


const dice = [5,1,3,4,1];
function score(dice){

    //declare variables for scores
    var points = {'1': 1000, '6':600, '5' :500, '4': 400, '3':300, '2':200, 'one':100, 'five':50}
    var score =0;
    //Count occurences of number and add to object 
    function getObj(arr){
    return arr.reduce( (acc, indx) => {
        acc[indx] = (acc[indx] || 0) + 1 ;
        return acc;
        } , {});
    } 

    var obj= getObj(dice);

    function calculate(object){
        var total = 5;
        while(total >0){  
            for(var key in object){
                var value = object[key]; 
                if(value >=3){
                    score += points[key];
                    if(key ==1 || key ==5 ){
                        object[key]-=3;
                        total -=3;       
                    }
                    else{
                        object[key]-=3;                           
                    }       
                }
                else if (value < 3){
                    if(key ==1 ){
                        score += (points['one']*value)
                        object[key] = 0;
                        total -= value;           
                    }
                    else if (key ==5) { 
                        score += (points['five']*value)
                        object[key] =0;   
                        total -= value;  
                    } 
                    else{
                        total -= value; 
                    } 
                } 
                
            }  
        } 
        return score;     
    }
return calculate(obj); 
}
console.log(score(dice));
