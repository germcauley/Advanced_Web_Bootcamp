

$("#btn").click(function(){
    $.getJSON("http://aws.random.cat/meow")
    .done(function(data){
        $("#catImage").attr("src",data.file);
        console.log(data.file);
    })
    .fail(function(){
        alert("Something went wrong!");
    })
})