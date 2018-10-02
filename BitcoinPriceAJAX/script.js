  var btn = document.querySelector("#btn");
  var span = document.querySelector("#price");
  
  function loadFunction() {
    makeRequest();
}
  
  btn.addEventListener("click", function(){
    //make request
    makeRequest();
  });

  function makeRequest (){
    var XHR = new XMLHttpRequest();
    XHR.onreadystatechange = function(){
      if(XHR.readyState ==4 && XHR.status ==200){
        var data = JSON.parse(XHR.responseText);
        var price = data.bpi.EUR.rate;
        span.innerText = price + " EUR";
      }
    }
     XHR.open("GET","https://api.coindesk.com/v1/bpi/currentprice.json");
    XHR.send();
  }
 
 