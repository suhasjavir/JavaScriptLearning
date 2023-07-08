
console.log(`Checking age eligibility for driving licence`);

let age = 16;

if (age<=0 || age > 120) {
    console.log(`Please enter valid age.`);
} else if(age < 9){
    console.log(`You are kid and you can not even think of driving`);
    
} else if(age < 18){
    console.log(`You are kid and you can think of driving after 18`);
}  else {
    console.log(`You can drive as you are above 18`);
} 

console.log("you can", age>18 ? "drive." : "not drive.");
console.log(`----------------------------------------------------------------------------------`);
console.log(`"if variable is not initilised then it will be return undefined,
you want to show some perticuler value/output.
then use following method."`);

let user; // user = "Suhas"
// console.log(user);
console.log(user ?? "Guest User");