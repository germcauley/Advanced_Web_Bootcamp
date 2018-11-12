//forEach

// function forEach(array, callback){
//     for(var i =0; i < array.length; i++){
//         callback(array[i],i,array);
//     }
// }

function halfArr (arr){
    newArr =[]
    arr.forEach(function(val){
        newArr.push(val/2);
    })
    console.log(newArr);
}

halfArr([2,6,8]);