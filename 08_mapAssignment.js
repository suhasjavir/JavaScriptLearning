class Bank{
    constructor(bankName, location, accountNo, ifsc, interestRate){
        this.bankName = bankName;
        this.location = location;
        this.accountNo = accountNo;
        this.ifsc = ifsc;
        this.interestRate = interestRate;
    }
}
console.log(`---------------------------------------------------------------------`);
console.log(`A) created the class and added the data members:`);

const axis_bank = new Bank("Axix Bank", "Balaji Nagar", 8784597753, "AXIS00002345", "8.5%");
const sbi_bank = new Bank("SBI Bank", "Balaji Nagar", 25466773455, "SBIN0000243", "9.5%");
const icici_bank = new Bank("ICICI Bank", "Balaji Nagar", 427573455, "ICICI0000243", "9%");
const kotak_bank = new Bank("Kotak Bank", "Balaji Nagar", 74466773455, "KOTAK0000243", "9%");
const hdfc_bank = new Bank("HDFC Bank", "Balaji Nagar", 53466773455, "HDFC0000243", "9.5%");
const panjab_bank = new Bank("Panjab Bank", "Balaji Nagar", 21466773455, "Panjab0000243", "9%");
console.log(`---------------------------------------------------------------------`);
console.log(`B) created objects of various banks:`);


console.log(`---------------------------------------------------------------------`);
console.log(`C) map is created which has a key accountNo & value as object:`);
const mapOfBank = new Map();
mapOfBank.set(8784597753, axis_bank);
mapOfBank.set(25466773455, sbi_bank);
mapOfBank.set(427573455, icici_bank);
mapOfBank.set(74466773455, kotak_bank);
mapOfBank.set(53466773455, hdfc_bank);
mapOfBank.set(21466773455, panjab_bank);
const keyOfMapBank = mapOfBank.keys();
console.log(`keys of Map:`);
console.log(keyOfMapBank);
console.log(`values of keys:`);
console.log(axis_bank);
console.log(sbi_bank);
console.log(icici_bank);
console.log(kotak_bank);
console.log(hdfc_bank);
console.log(panjab_bank);
console.log(`---------------------------------------------------------------------`);
console.log(`D) Traverse the map using bankName, accountNumber, interest Rate:`);

for (const key of keyOfMapBank) {
    const bank = mapOfBank.get(key);
    console.log(`${bank.bankName}, ${bank.accountNo}, ${bank.interestRate}`);
}