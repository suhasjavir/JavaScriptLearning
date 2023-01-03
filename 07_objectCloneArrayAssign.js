const arrayNums = [20, 3, 4, 56, 90, 400, 49];
console.log(`Output1. Shallow Cloning`);
console.log(`Given array: ${arrayNums}`);
let clonedArray = arrayNums;
clonedArray.push(55,66);
console.log(`Array after Cloning and update: ${clonedArray}`);
console.log(`-----------------------------`);
console.log(`Output2. Deep cloning using spread operator`);
const arrayNums1 = [20,3,4,56,90,400,49];
console.log(`Given array: ${arrayNums1}`);
let deepclonedarray = [...arrayNums1];
arrayNums1.push(10,25);

console.log(`Array after cloning and update: ${arrayNums1}`);
console.log(`-----------------------------`);

console.log(`Output3. Mearge or concat array using spread operator`);
const arrayEven = [2,30,14,8];
let combinedarray=[...arrayNums, ...arrayEven];
console.log(`mearge result of "arrayNums" and "arrayeven": ${combinedarray}`);
console.log(`-----------------------------`);

// console.log(`Output5. `);
const employeeInfo={
    empId:27,
    empName: "John Doe",
    salary:{
        julyMonth:"40,000INR",
        augMonth: "50,000INR",
        junMonth: "65,000INR"
    },
    address:{
        locality:{
            colony:"Om Vrindavan Society",
            street: "Kanch Pokali, 431202"
        },
        city: "Mumbai", 
        state: "Maharashtra",
        country: "India"
    },
    mobiles: ["+91 8600 3456 88", " 1800- 4567 32", " +91- 9096 5678 77"]
}
// console.log(`employee Info created`, employeeInfo);
// console.log(`-----------------------------`);

console.log(`Output5 A. Eployee details: `);
console.log(`Address: ${employeeInfo.address.locality.colony}, ${employeeInfo.address.locality.street}, ${employeeInfo.address.city}, ${employeeInfo.address.state}, ${employeeInfo.address.country}`);

// console.log(`-----------------------------`);

console.log(`Output5 B.`);

console.log(`Mobile No are: ${employeeInfo.mobiles}`);

console.log(`-----------------------------`);

console.log(`Output6. a.`);
let updatedEmployeeInfo = JSON.parse(JSON.stringify(employeeInfo));
updatedEmployeeInfo.salary.julyMonth = "80,000INR";
// console.log(employeeInfo);
// console.log(updatedEmployeeInfo);
console.log(`before upadate July salary:`, employeeInfo.salary.julyMonth);
console.log(`After upadate July salary:`, updatedEmployeeInfo.salary.julyMonth);

console.log(`Output6. b.`);
let updatedEmployeeContry = JSON.parse(JSON.stringify(employeeInfo));
updatedEmployeeInfo.address.country = "United Kingdom";
console.log(`before upadate Country:`, employeeInfo.address.country);
console.log(`After upadate Country:`, updatedEmployeeInfo.address.country
);


