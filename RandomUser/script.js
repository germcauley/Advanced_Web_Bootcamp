var btn = document.querySelector("button");
var avatar = document.querySelector("#avatar");
var fullname = document.querySelector("#fullname");
var username = document.querySelector("#username");
var email = document.querySelector("#email");
var city = document.querySelector("#city");

btn.addEventListener("click", function(){
  var url = 'https://randomuser.me/api/';
  fetch(url)
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        var firstname = data.results[0].name.first;
        var lastname = data.results[0].name.last;
        var usernametxt = data.results[0].login.username;
        var emailtxt = data.results[0].email;
        var citytxt = data.results[0].location.city;
        var pic = data.results[0].picture.thumbnail;
        console.log(firstname);
        console.log(lastname);
        console.log(username);
        console.log(email);
        console.log(city);
        console.log(pic);
        avatar.src=pic;
        fullname.innerText = firstname+" "+lastname;
        username.innerText = usernametxt;
        email.innerText = emailtxt;
        city.innerText = citytxt;
        
    })
    .catch(function(err){
        console.log(err);
    });
});