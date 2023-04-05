let addition = function (no1, no2){
    console.log(no1+no2);
}

function result(callbackAddition) {
    callbackAddition(20, 10);
} 
result(addition);