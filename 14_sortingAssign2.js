console.log(`-------------------------------------------------------------------------`);
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
console.log(`1) Sorting array of employees in ascending order by id:`);
const arrayofemployee = [empAnil,empRadha,empRishi,empSonali,empMonika,empVinayak,empMahesh];
arrayofemployee.sort((emp1, emp2)=>{
    return emp1.empId>emp2.empId ? 1 : -1;
});
arrayofemployee.forEach((employee)=>{
    console.log(`${employee.empId} ${employee.empName} ${employee.empDept}`);
});
console.log(`-------------------------------------------------------------------------`);
console.log(`2) Sorting array of employees in ascending order by Dept:`);
arrayofemployee.sort((emp1, emp2)=>{
    return emp1.empDept>emp2.empDept ? 1 : -1;
});
arrayofemployee.forEach((employee)=>{
    console.log(`${employee.empId} ${employee.empDept} ${employee.empCompany}`);
});
console.log(`-------------------------------------------------------------------------`);
console.log(`3) Sorting array of employees in descending order by Emp Salary:`);
arrayofemployee.sort((emp1,emp2)=>{
    return emp1.empSal>emp2.empSal ? 1 : -1;
});
arrayofemployee.forEach((employee)=>{
    console.log(`${employee.empName} ${employee.empSal} ${employee.empCompany}`);
});
console.log(`-------------------------------------------------------------------------`);