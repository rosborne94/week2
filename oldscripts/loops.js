/*// while 
var count = 1;
while (count <= 5) {
    console.log (count);
    count++;
}
// for
console.log("\n\n\n");
for (var i=0; i <= 100; i++){
    console.log(i);
}
for (var i=0; i <= 100; i+=10){
    console.log(i);
}

// for each
console.log("\n\n\n");
 var names = ["Bob", "Steve", "Janine", "Linus"];
 console.log (names.length)
 console.log(names[2]);

 for(var n in names){
     console.log(n);
     console.log(names[n]);
 }
 for(var n in names){
     if (names[n][0] == "B") {
         console.log("Name starts with B: " + names[n]);
     }
     if (names[n][0] == "S") {
         console.log("Name starts with S: " + names[n]);
     }
     if (names[n][0] == "J") {
         console.log("Name starts with J: " + names[n]);
     }
     if (names[n][0] == "L") {
         console.log("Name starts with L: " + names[n]);
     }
 }
// do while
var enteredCorrectAnswer = false;
do{
    //ask for guess
    enteredCorrectAnswer = true;
    console.log(true);

}while(!enteredCorrectAnswer);

//extra loops
//Counting backwards with for loops
for (var i=100; i >= 0; i-=5){
    console.log(i);
}
for (var i=100; i >= 0; i--){
    console.log(i);
}
//Count to 10 with while loop
var i = 1;
while(i <= 10){
    console.log(i);
    i++;
}
//Count backwards with while loop
var num = 100;
while(num >= 0){
    console.log(num);
    num--;
}
//Count backwards if divisible by 25 say "divisible by 25"
var num = 100;
while(num >= 0){
     if (num % 25 == 0 && num !=0){
        console.log(num + "divisible by 25")
    }
    else{
        console.log(num);
    }
    num--;
   
}
//fizzbuzz
for (var i=1; i <= 100; i++){
    if(i % 3 == 0 && i % 5 == 0){
        console.log("fizzbuzz");
    }
     else if(i % 3 == 0){
        console.log("fizz");
    }
    else if(i % 5 == 0){
        console.log("buzz");
    }
    else{
        console.log(i);
    }
}*/





var myName = ("Riley");

console.log(myName.length);
