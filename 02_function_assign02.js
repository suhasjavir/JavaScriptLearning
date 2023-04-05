
console.log(`\n=========== Bank details using function===========\n`);
function bankDetails(bankName, accountNum, location, pinCode){
    console.log("My bank details are: ", "Bank Name:", bankName, ".. Account Number:", accountNum, ".. Location:", location,".. Pincode:", pinCode,"\n");
}
bankDetails("City Bank", 3456782345, "Pune", 431202);
bankDetails("Axis Bank", 7856782345, "Mumbai", 441202);
bankDetails("HDFC Bank", 8956782345, "Pune", 631202);

console.log(`\n===========write a table using function===========\n`);
function mulTable(val){
    for (let i = 0; i <= 10; i++) {
        console.log(`val * ${i} = ${val * i}`);
        }
}
mulTable(10);

console.log(`\n=========== Addition of two numbers - using function===========\n`);

function add(no1, no2) {
    console.log(`Addition of ${no1} and ${no2} is: ${no1 + no2}`);    
}
add(5, 10);
// add(10, 50)

