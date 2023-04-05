console.log(`\n=========== Addition of two numbers - using function - Arguments array object ===========\n`);
function additon(){
    if (arguments.length==0) {
        console.log(`No arguments passed !!!`);    
    } else{
        let sum = 0;
        for (let i = 0; i < arguments.length; i++) {
            sum = sum + arguments[i];
        }
        console.log(sum);
    }
}
additon(5); // 5
additon(10, 20); // 30
additon(10,20,20);

let numAdd = additon;  // Storing a function in a variable.
numAdd(1,2,3,4,5,6,7,8,9,10,10);
