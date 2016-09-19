// Bronze challenge
for (var i=0; i <= 30; i++){
    if (i == 3 || i == 13 || i == 17) { 
        continue; 
    }
    console.log(i);
}
//Silver challenge
var result = "";
for (var i=10; i <= 50; i++){
    result += i.toString();
}

console.log(result);

//Gold challenge
fib = function(numMax){
    for(var fibArray = [0,1], i=0,j=1,k=0; k<numMax;i=j,j=x,k++ ){
        x=i+j;
        fibArray.push(x);
    }
    console.log(fibArray);
}

fib(10)
