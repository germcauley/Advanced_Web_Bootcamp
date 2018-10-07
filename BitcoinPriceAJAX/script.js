  var btn = document.querySelector("#btn");
  var span = document.querySelector("#price");
  var eur = document.querySelector("#eur");
  var usd = document.querySelector("#usd");
  var gbp = document.querySelector("#gbp");
  
  function loadFunction() {
    makeEURRequest();
}


  
  // btn.addEventListener("click", function(){
  //   //make request
  //   makeRequest();
  // });
  eur.addEventListener("click", function(){
    //make request
    makeEURRequest();
  });
  usd.addEventListener("click", function(){
    //make request
    makeUSDRequest();
  });
  gbp.addEventListener("click", function(){
    //make request
    makeGBPRequest();
  });

  function makeEURRequest (){
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
  
  function makeUSDRequest (){
    var XHR = new XMLHttpRequest();
    XHR.onreadystatechange = function(){
      if(XHR.readyState ==4 && XHR.status ==200){
        var data = JSON.parse(XHR.responseText);
        var price = data.bpi.USD.rate;
        span.innerText = price + " USD";
      }
    }
     XHR.open("GET","https://api.coindesk.com/v1/bpi/currentprice.json");
    XHR.send();
  }

  function makeGBPRequest (){
    var XHR = new XMLHttpRequest();
    XHR.onreadystatechange = function(){
      if(XHR.readyState ==4 && XHR.status ==200){
        var data = JSON.parse(XHR.responseText);
        var price = data.bpi.GBP.rate;
        span.innerText = price + " GBP";
      }
    }
     XHR.open("GET","https://api.coindesk.com/v1/bpi/currentprice.json");
    XHR.send();
  }
 
 