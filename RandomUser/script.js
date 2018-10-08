var btn = document.querySelector("button");
btn.addEventListener("click", function(){
  var url = 'https://randomuser.me/api/';
  fetch(url)
  .then(handleErrors)
  .then(function(request){
    console.log("EVERYTHING IS FINE!");
    console.log(request);
  })
  .then(updateProfile)
  .catch(function(error){
    console.log(error);
  });
});

function handleErrors (request){
  if(!request.ok) {
    throw Error(request.status);
  }
  return request;
}