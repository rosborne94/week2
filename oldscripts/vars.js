var firstName = "Riley";
var lastName = "Osborne";
var myAge = 22;

console.log(firstName);
console.log(lastName);
console.log(myAge);

firstName = "Jimbo";
lastName = "McKee";

console.log(firstName);
console.log(lastName);

// Adding 2 numbers together
var sum = 2 + 2; //sum is 4
sum = sum + 7; //adding 7 to sum is 11

// there are a couple types of comments single line

/* single or multi-line
comment*/

console.log(sum);

sum = sum + "Riley";

console.log(sum);

var bankBalance = 100;
var deposit = "10";

console.log(bankBalance + deposit);
console.log(bankBalance + (deposit * 1));//when string is a number will make it an integer

var a = 10, b = 17; //can chain vars

console.log(a);
console.log(b);

sum = a + b;

console.log(sum);

b += a;
console.log(b);// same as b = b + a
console.log(a == b);// can be true or false
console.log(!(a == b));