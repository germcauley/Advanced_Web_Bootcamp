function bouncingBall(h,  bounce,  window) {
    if(h>0 && bounce>0 && bounce <1 && window < h){
        let views =1;
        h = h*bounce;
        while(h>=window){
            views+=2
            h = (h*bounce);
            }
        return(views);
        }
    else{
            return -1;
        }
    }

// A child is playing with a ball on the nth floor of a tall building. The height of this floor, h, is known.

// He drops the ball out of the window. The ball bounces (for example), to two-thirds of its height (a bounce of 0.66).

// His mother looks out of a window 1.5 meters from the ground.

// How many times will the mother see the ball pass in front of her window (including when it's falling and bouncing?
// Three conditions must be met for a valid experiment:

//     Float parameter "h" in meters must be greater than 0
//     Float parameter "bounce" must be greater than 0 and less than 1
//     Float parameter "window" must be less than h.

// If all three conditions above are fulfilled, return a positive integer, otherwise return -1.

// Note: The ball can only be seen if the height of the rebounding ball is stricty greater than the window parameter.

// Example:

//     h = 3, bounce = 0.66, window = 1.5, result is 3

//     h = 3, bounce = 1, window = 1.5, result is -1 (Condition 2) not fulfilled).



// function bouncingBall(h,  bounce,  window) {
//     let views = 0;
//     //return"H is: " + h.toString();
//     // console.log("Bounce is: " +bounce);
//     // console.log("Window is: " +window);

//     if(h >= window){
//         views =1;
//         h = (h/bounce);
//         while(h>window){
//                 views+=2;
//                 h=(h/bounce);  
//         }
        
//     }
//     else{
//         return 0;
//     }
// }

function bouncingBall(h,  bounce,  window) {
    if(h>0 && bounce>0 && bounce <1 && window < h){
        let views =1;
        h = h*bounce;
        while(h>=window){

            views+=2
            h = (h*bounce);
            }
        return(views);
        }
    else{
            return -1;
        }
    }
    
 

bouncingBall(16,0.5,4);
    //bounce becomes the new height
    //if h higher than window view = 1 initiall, otherwise  return 0
    //if bounce is higher than window add 2 (pass up and pass down)
    //keep repeating if bounce is higher than window

    //height = 4 bounce = 2 window 0.5  add1 pass on way down
    //h= 2 bounce = 1   add 2 pass on way up and down
    //h = 1 bounce =0.5  add2 pass on way up and down
    //h = 0.25  end
  