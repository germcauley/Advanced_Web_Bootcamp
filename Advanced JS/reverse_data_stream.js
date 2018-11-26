//Reverse data stream of 8 bit array
function dataReverse(data){
   var newArr=[]
//calculate how many 8 bit arrays the data will be organised into
//create array of N arrays.
   for(var i=0; i< data.length / 8; i ++){
   newArr.push([]);
   }
let k=1;
//iterate through number of newArr arrays
   for(let x =1; x<=newArr.length; x++){
      while(k<=x*8) {
      //iterate through every 8 digits from original data and add to an array
      newArr[newArr.length-x].push(data[k-1]);
      k++;
      }
   }
return([].concat.apply([], newArr));//flatten array of arrays
}



   






  

