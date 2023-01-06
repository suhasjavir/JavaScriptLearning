class Bank{
    constructor(bankName, location, accountNo, ifsc, interestRate){
        this.bankName = bankName;
        this.location = location;
        this.accountNo = accountNo;
        this.ifsc = ifsc;
        this.interestRate = interestRate;
    }
}
console.log(`A) Created the class "Bank" and added the given data members:`);
console.log("-----------------------------------------------------------------------------------");
const axisBank = new Bank("Axis Bank", "Balaji Nagar", 675345673, "AXIS000321", 9);
const sbiBank = new Bank("SBI Bank", "Balaji Nagar", 8739573678, "SBIN000213", "9.5");
const iciciBank = new Bank("ICICI Bank", "Balaji Nagar", 787657878,"ICICI000037", "9%");
const kotakBank = new Bank("Kotak Bank", "Balaji Nagar", 25756786432, "KOTAK0001234", "9.5");
const hdfcBank = new Bank("HDFC Bank", "Balaji Nagar", 564312461334, "HDFC000015", "8.5%");
const panjabBank = new Bank("Punjab Bank", "Swarget", 4257868444, "PUNJAB000235", "10%");

console.log(`B) Created the given "Objects":`);

console.log(axisBank);
console.log(sbiBank);
console.log(iciciBank);
console.log(kotakBank);
console.log(hdfcBank);
console.log(panjabBank);
console.log("-----------------------------------------------------------------------------------");
console.log(`C) Created an array of given objects and traverse with for of loop and just logged the bank name and location:`);

const bankArray = [axisBank, sbiBank, iciciBank, kotakBank, hdfcBank, panjabBank];
// console.log(axisBank);
// const axis = bankArray[0];
// console.log(`${axis.bankName}, ${axis.location}`);
// const sbi = bankArray[1];
// console.log(`${sbi.bankName}, ${sbi.location}`);
// const icici = bankArray[2];
// console.log(`${icici.bankName}, ${icici.location}`);
// const kotak = bankArray[3];
// console.log(`${kotak.bankName}, ${kotak.location}`);
// const hdfc = bankArray[4];
// console.log(`${hdfc.bankName}, ${hdfc.location}`);
// const punjab = bankArray[5];
// console.log(`${punjab.bankName}, ${punjab.location}`);
for (const detailsbank of bankArray) {
    console.log(`${detailsbank.bankName}, ${detailsbank.location}`);
}
console.log("-----------------------------------------------------------------------------------");
console.log(`D) find the object which has name "kotak bank" and log on console using for of loop:`);

for (const iterator of bankArray) {
    if(iterator == kotakBank){
        console.log(iterator);
    }
}
console.log("-----------------------------------------------------------------------------------");
console.log(`E) log the details on console using for loop:`);


for (let index = 0; index < bankArray.length; index++) {
    const element = bankArray[index];
    console.log(element);
}

