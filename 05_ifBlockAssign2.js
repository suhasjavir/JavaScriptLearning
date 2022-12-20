console.log(`Grade Calculation System :`);
var gradeCalculation = function (marks) {
  if (marks >= 90 && marks <= 100) {
    console.log(`Funtastic Marks ! ${marks}, Your grade is A+`);
  }
  if (marks >= 75 && marks < 90) {
    console.log(`Excellent marks ! ${marks}, Your grade is A`);
  }
  if (marks >= 50 && marks < 75) {
    console.log(`Good marks ! ${marks}, Your grade is B`);
  }
  if (marks >= 35 && marks < 50) {
    console.log(`Mark is ${marks}, Your grade is C, need improvement`);
  }
  if (marks >= 1 && marks <= 34) {
    console.log(
      `Mark is ${marks}, Unfortunately you are fail, please try next time`
    );
  }
  if (marks <= 0 || marks > 100) {
    console.log(`You have entered ${marks}, Prease provide the valid marks`);
  }
}
gradeCalculation(98);
gradeCalculation(80);
gradeCalculation(90);
gradeCalculation(0);
gradeCalculation(150);
gradeCalculation(-7);
gradeCalculation(35);
gradeCalculation(29);
gradeCalculation(64);
gradeCalculation(49);
