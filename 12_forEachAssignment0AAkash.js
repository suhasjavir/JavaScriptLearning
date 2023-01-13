class employee{
    constructor(emp_id,emp_name,emp_dept,emp_salary,emp_company){
        this.emp_id=emp_id,
        this.emp_name=emp_name,
        this.emp_dept=emp_dept,
        this.emp_salary=emp_salary
        this.emp_company=emp_company
    }
}
const emp_Akash=new employee(22,"Akash","IT",50000,"TCS");
const emp_Suyash=new employee(33,"Suyash","HR",74000,"Wipro");
const emp_onkar=new employee(55,"Onkar","Finance",47000,"TCS");
const emp_anil=new employee(66,"Anil","Finance",45000,"Infy");
const emp_sanket=new employee(77,"Sanket","IT",40000,"wipro");
const emp_Ashitosh=new employee(88,"Ashitosh","IT",75000,"TCS");
const emp_Ajay=new employee(99,"Ajay","HR",85000,"Infy");
console.log(``);
console.log(`1 ) Find Out The TCS employee and log Name  and company`);

const Arrayofemployee=[emp_Akash,emp_Suyash,emp_onkar,emp_anil,emp_sanket,emp_Ashitosh,emp_Ajay];
Arrayofemployee.forEach((employee) => {
if (employee.emp_company=="TCS") {
    console.log(`employee Name is :- ${employee.emp_name} ,Company Name IS:- ${employee.emp_company}`);
}
});
console.log(``);
console.log(`2) Find Out The Employee Who Have Salary Greather Than Or equal to 50000 and log it console`);

const Arrayofemployees=[emp_Akash,emp_Suyash,emp_onkar,emp_anil,emp_sanket,emp_Ashitosh,emp_Ajay];
Arrayofemployees.forEach((employee)=> {
    if (employee.emp_salary>=50000) {
      console.log( `Employee Id ;- ${employee.emp_id} Name :- ${employee.emp_name} , Dept :- ${employee.emp_dept} , Salary :- ${employee.emp_salary} , company :- ${employee.emp_company}`);  
    }
});
console.log(``);
console.log(`3) Find the sum of all employee `);

var sum=0;
var avg=0;
const empsalarysum=[50000,74000,47000,45000,40000,75000,85000];
 var res=empsalarysum.length
empsalarysum.forEach((currentvalue) =>{
    sum=sum+currentvalue;
avg=sum/res;
});
console.log(`The sum of all Employee Salary is :- ${sum}`);
console.log(``);
console.log(`4) Find the average of salary and log on console`);
console.log(`Average of salary :-  ${avg}`);
console.log(``);
console.log(` 5 ) find IT or HR employee whose salary is grether than to equal 75000 `);
Arrayofemployees.forEach((employee)=> {
    if ((employee.emp_dept=="IT" || employee.emp_dept =="HR") && employee.emp_salary>=75000)  {
      console.log( `Employee Id ;- ${employee.emp_id} Name :- ${employee.emp_name} , Dept :- ${employee.emp_dept} , Salary :- ${employee.emp_salary} , company :- ${employee.emp_company}`);  
    }
});


