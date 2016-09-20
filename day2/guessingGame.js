//Create variable to hold the answer
var answer;

//Setup the game
function setupGame(){
    //Clear out old values
    $("#tbxGuess").val("");
    $("#message").val("");
    // Come up with the answer
    answer = parseInt(Math.random() * 10);
    console.log("Cheater! Don't you dare enter " + answer);
    //Hide and show appropriate divs
    $("#intro").show();
    $("#game").hide();
}

//Handle the guess
function handleGuess(){
    var guess = $("#txbGuess").val();
    if(+guess == answer){
        //Tell them the answer is right
        $("#message").text("You're right!");
    }
    else{
        //Tell them the answer is wrong
        $("#message").text("Nope, try again!");
        $("#tbxGuess").val("");
    }

}

//Setup the page for the game
function playGame (){
    $("#intro").hide();
    $("#game").show();
    //Focus on the guess box
    $("#txbGuess").focus();

}

//When the page loads, setup the game
$(function(){
    //Wire up the event handlers
    $("#startGame").on("click", playGame);
    $("#btnGuess").on("click", handleGuess);
    //start game
    setupGame();
});