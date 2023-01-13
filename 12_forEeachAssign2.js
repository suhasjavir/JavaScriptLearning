console.log(`------------------------------ Assignment 1 -------------------------------------------------`);
class employee{
    constructor(empId,empName,empDept,empSal,empCompany){
        this.empId=empId,
        this.empName=empName,
        this.empDept=empDept,
        this.empSal=empSal,
        this.empCompany=empCompany
    }
}
const empAnil=new employee(22,"Anil","IT",50000,"TCS");
const empRadha=new employee(33,"Radha","HR",74000,"Wipro");
const empRishi=new employee(55,"rishi","Finance",47000,"TCS");
const empSonali=new employee(66,"Sonali","Finance", 45000,"Infy");
const empMonika=new employee(77,"Monika","IT",40000,"Wipro");
const empVinayak=new employee(88,"Vinayak","IT",75000,"TCS");
const empMahesh=new employee(99,"Mahesh","HR",85000,"Infy");

const mapOfEmployee=new Map();
mapOfEmployee.set(22,empAnil);
mapOfEmployee.set(33,empRadha);
mapOfEmployee.set(55,empRishi);
mapOfEmployee.set(66,empSonali);
mapOfEmployee.set(77,empMonika);
mapOfEmployee.set(88,empVinayak);
mapOfEmployee.set(99,empMahesh);

console.log(`1) Traverse the map using forEach with key and value in given format:`);
mapOfEmployee.forEach((currentvalue, key) => {
    console.log(`${key}===> Name: ${currentvalue.empName}, Dept: ${currentvalue.depDept}, Company: ${currentvalue.empCompany}, Salary: ${currentvalue.empSal}`);
});
console.log(`\n------------------------------ Assignment 2 -------------------------------------------------`);
console.log(`1) TCS employee details:`);
const arrayofemployee=[empAnil,empRadha,empRishi,empSonali,empMonika,empVinayak,empMahesh];
// console.log(arrayofemployee);
arrayofemployee.forEach((employee)=>{
    if(employee.empCompany=="TCS")
    console.log(`Employee Name is:${employee.empName} and his company is: ${employee.empCompany}`);
    // console.log(employee.empName);
});
console.log(`---------------------------------------------------------------------------------------------`);
console.log(`2) find the employees with salary greater than or equal to 50000:`);
arrayofemployee.forEach((employee)=>{
    if (employee.empSal>=50000) {
        console.log(employee);
    }
});
console.log(`---------------------------------------------------------------------------------------------`);
console.log(`3) find the sum of all employees salary:`);
let sumOfSalary = 0;
arrayofemployee.forEach((employee)=>{
sumOfSalary+=employee.empSal
});
console.log(`Sum of all employees salary: ${sumOfSalary}`);
console.log(`---------------------------------------------------------------------------------------------`);
console.log(`4) find the average salary of all employees:`);
console.log(`Average salary of all employees: ${sumOfSalary/arrayofemployee.length}`);
console.log(`---------------------------------------------------------------------------------------------`);
console.log(`5) find the IT or Hr department employees whose salary greater than or equal to 75000:`);
arrayofemployee.forEach((employee)=>{
    if((employee.empDept="IT" || "HR") && (employee.empSal>=75000)){
        console.log(employee);
    }
})
