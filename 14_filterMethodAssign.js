console.log(`------------------------------| Assignment 1 |----------------------------------------------`);
class Employee{
    constructor(empId,empName,empDept,empSal,empCompany){
        this.empId=empId,
        this.empName=empName,
        this.empDept=empDept,
        this.empSal=empSal,
        this.empCompany=empCompany
    }
}
const empAnil=new Employee(22,"Anil","IT",50000,"TCS");
const empRadha=new Employee(33,"Radha","HR",74000,"Wipro");
const empRishi=new Employee(55,"rishi","Finance",47000,"TCS");
const empSonali=new Employee(66,"Sonali","Finance", 45000,"Infy");
const empMonika=new Employee(77,"Monika","IT",40000,"Wipro");
const empVinayak=new Employee(88,"Vinayak","IT",75000,"TCS");
const empMahesh=new Employee(99,"Mahesh","HR",85000,"Infy");
// console.log(empAnil);
const arrayofemployee=[empAnil,empRadha,empRishi,empSonali,empMonika,empVinayak,empMahesh];
console.log(`-----------------[ Find the TCS employees company name and employee name ]---------------------`);
const arrayTcsEmployee = arrayofemployee.filter((employee)=> {
    return employee.empCompany=="TCS";
})
arrayTcsEmployee.forEach((employee)=>{
    console.log(`Company Name: ${employee.empCompany}, Employee Name" ${employee.empName}`);
});
console.log(`------------------------------| Assignment 2 |-------------------------------------------------`);
console.log(`--------------------------[ 1) Find all employees from wipro ]---------------------------------`);
const arrayWiproEmployee = arrayofemployee.filter((employee)=>{
    return employee.empCompany=="Wipro";
});
arrayWiproEmployee.forEach((employee)=>{
// console.log(`Company Name: ${employee.empCompany}, Employee Name: ${employee.empName}`);
console.log(employee);
});
console.log(`------------[ 2) Find all employees from IT or HR Department ]---------------------------------`);
const arrayItHrEmployee = arrayofemployee.filter((employee)=>{
    return (employee.empDept=="IT" || employee.empDept=="HR");
});
arrayItHrEmployee.forEach((employee)=>{
    console.log(employee);
});
console.log(`------------[ 3) Find all employees whose EmpId is greater than 50 ]---------------------------`);
const arrayOfGreater = arrayofemployee.filter((employee)=>{
    return employee.empId>50;
});
arrayOfGreater.forEach((employee)=>{
    console.log(employee);
});
console.log(`--------[ 4) Find all employees whose name starts with "A","V" or "M"]-------------------------`);
arrayofemployee.forEach((employee)=>{
    if (employee.empName.startsWith("A")||employee.empName.startsWith("V")||employee.empName.startsWith("M")) {
        console.log(employee);
    }
});
console.log(`----------[ 5) Find the avarage salary of the employee of employee for all department ]--------`);
let totalSal=0;
arrayofemployee.forEach((salary)=>{
    totalSal += salary.empSal;
});
console.log(`Average salary of all employees: ${totalSal/arrayofemployee.length}`);
console.log(`---------------------[ 6) Find the avarage salary for "IT" Department ]------------------------`);
let totalSalIT = 0;
const arrayOfSalIT = arrayofemployee.filter((employee)=>{
    return employee.empDept=="IT";
});
arrayOfSalIT.forEach((employee)=>{
    totalSalIT += employee.empSal;
});
console.log(`Average salary of "IT" department: ${totalSalIT/arrayOfSalIT.length}`);



// let totalSalIT=0;
// const averageSalIt=arrayOfSalIT.reduce((runningTotal, value)=>{
//     totalSalIT += (runningTotal + value.empSal);
// });
// console.log(totalSalIT);

// console.log(`${totalSalIT/arrayOfSalIT.length}`);