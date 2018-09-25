
function countDown(num){
    var interval = setInterval(function(){
        console.log(num);
        console.log("Setinterval is running!");
        num--;
        if(num ===0){
            console.log("Ring Ring Ring!!!");
            clearInterval(interval);
        }
        },1000);
}
