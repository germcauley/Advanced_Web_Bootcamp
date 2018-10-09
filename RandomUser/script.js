var btn = document.querySelector("button");
btn.addEventListener("click", function(){
  var url = 'https://randomuser.me/api/';
  fetch(url)
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        var fullname = data.results[0].name.first;
        console.log(fullname);
        
    })
    .catch(function(err){
        console.log(err);
    });
});