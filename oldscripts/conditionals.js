var inchesOfSnow = 10;

if (inchesOfSnow >= 12) {
    console.log("It's a snow day!");
} 
else if (inchesOfSnow >= 4 && inchesOfSnow <= 12) {
    console.log("Waiting to see if school will be canceled.")
} 
else {
    console.log("There will be school!");
}

var dayOfWeek = "Mon";

switch (dayOfWeek) {
    case "Mon":
    console.log("Somebody has a case of the Mondays!");
    break;
case "Tues":
case "Wed":
case "Thurs":
case "Fri":
        console.log("Gotta go to work!");
        break;
    default:
        console.log("Enjoying the weekend!");
        break;
}