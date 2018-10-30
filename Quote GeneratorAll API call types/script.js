var url = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes'
var XHRbtn = document.querySelector("#xhr");
var fetchbtn = document.querySelector("#fetch");
var jquerybtn = document.querySelector("#jquery");
var axiosbtn = document.querySelector("#axios");

XHRbtn.addEventListener("click",function(){
    var XHR = new XMLHttpRequest();
    XHR.onreadystatechange= function(){
        if(XHR.readyState ==4 && XHR.status ==200){
           console.log(XHR.responseText); 
        }
    }
    XHR.open('GET',url);
    XHR.send();
});