$(document).ready(function(){
    $("#paragraph").html("okay then");
});

$(document).ready(function(){
$("h3").css('color', 'red');
});

$(document).ready(function(){
    //read the instructions wrong
$("li").css('background-color', 'yellow');
});

//found out I was missing the $(document).ready part I searched online and nothing had it and I finally found it
//$(function()) is easier.
