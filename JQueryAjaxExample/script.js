$("#getBtn").click(function(){
    $.get('https://api.github.com/users/colt')
    .done(function(data){
      console.log(data);
    })
    .fail(function(){
      console.log("ERROR");
    })
  });
  
  $("#postBtn").click(function(){
    $.post("www.catsarecoolandsoaredogs.com").done(function(data){
      console.log("HI!");
    })
    .fail(function(){
      console.log("ERROR!");
    })
  });
  
  $("#getJSONBtn").click(function(){
    $.getJSON("https://api.github.com/users/colt")
    .done(function(data){
      console.log(data);
    })
    .fail(function(data){
      console.log("PROBLEM!");
    })
  });