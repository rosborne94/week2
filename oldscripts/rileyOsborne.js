// Riey Osborne, Alex & Kitty, 07-16-16

// Problem 1 
var numArray = [18, 24, 57, 98, 45, 27, 3, 456, 3, 35, 85];
 console.log (numArray.length)
 console.log(numArray[5]);
 var location = numArray [5];
// Problem 2 
var numArray = [18, 24, 57, 98, 45, 27, 3, 456, 3, 35, 85].reduce(add, 0);

function add(a, b) {
    return a + b;
}

console.log(numArray);
// Problem 3
var newArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var i = newArray.indexOf(10);
if(i != -1) {
	newArray.splice(i, 10);
}
console.log(newArray);
// newArray.pop(); removes the last item.

// Problem 4 
function sum(num1, num2){
    var num1 = 10;
    var num2 = 22;
    var result = num1 + num2;
    if (result <= 25){
        console.log(true);
    }
    else{
        console.log(false);
    }    
}
sum();

// Problem 5 
function strings(str1, str2){
    var str1 = ("Hello ");
    var str2 = ("world!");
    var combined = str1 + str2;
    if(combined.length > 12){
        console.log("Error, string too long!");
        //return "Error, string too long.";
    }
    else{
        console.log(combined);
        //return combined;
    }
}
strings();

//console.log(strings)

// Problem 6
var num = 0;
while(num <= 20){
    num++;
    if(num <= 5){
        console.log("Very Low Number");
    }
    else if(num >= 6 && num <= 10){
        console.log("Low Number");
    }
     else if(num >= 11 && num <= 15){
        console.log("High Number");
    }
    else{
        console.log("Very High Number")
    }
}