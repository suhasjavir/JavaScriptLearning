let globalVariable = 100;
function outer(){ 
    let outerVariable = 200;
    let inner = function(){
        let innerVariable = 300;
        console.log("Inner function");
        console.log(globalVariable);
        console.log(outerVariable);
        console.log(innerVariable);
        console.log(outerVariable);
        let sum = globalVariable + innerVariable + outerVariable;
        console.log(`${sum}`);
    }
    return inner;
}

let returnValue = outer();
returnValue();
// outer()(); // instead of above two lines we can use this one line for recieve output.
