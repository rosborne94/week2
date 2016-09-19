function writeHelloWorld(){
    console.log("Hello World!")
}
//call the function
writeHelloWorld();

function writeMessage(message){
    console.log(message);
}

writeMessage("Hey there, who are you?");

var msg = "some message";
writeMessage(msg);

function sum(number1, number2){
    var result = number1 + number2;
    return result;  
}

var a = sum(10, 50);
console.log(a);

console.log(sum(30, 40));

function count(num){
    for (var i = 0; i <= num; i++){
    console.log(i);
}
}

count(10);
count(100);