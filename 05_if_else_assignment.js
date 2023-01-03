console.log(
  `\n1) !!! -----------"Voting Eligibility using if else." ----------- !!!\n`
);
var votingElegibility = function (age) {
  var ageToElegible = 18 - age;
  if (age <= 0 || age >= 120) {
    console.log(
      `Your age is "${age}"... Invalid data... Please, Provide valid data.\n`
    );
  } else {
    if (age > 0 && age <= 18)
      console.log(
        `Your age is "${age}" ... You are minor and not elegible for vote. wait for ${ageToElegible} years\n`
      );
    else
      console.log(
        `Your age is "${age}"... Congratulations!!!........ you are eligible for vote.\n`
      );
  }
};
votingElegibility(45);
votingElegibility(17);
votingElegibility(8);
votingElegibility(20);
votingElegibility(-10);
votingElegibility(200);
votingElegibility(0);
console.log(`\n2) !!! -----------"Grade Calculation." ----------- !!!\n`);
var gradeCalculation = function (marks) {
  if (marks <= 0 || marks > 100 || typeof marks != "number") {
    console.log(`Your marks is "${marks}": please provide valid marks\n`);
  }
  if (marks > 90 && marks <= 100 && typeof marks == "number") {
    console.log(`Funtastic Marks "${marks}": Your grade is A+\n`);
  } else if (marks >= 75 && marks <= 90 && typeof marks == "number") {
    console.log(`Excellent Marks "${marks}": Your grade is A\n`);
  } else if (marks >= 50 && marks < 75) {
    console.log(`Excellent Marks "${marks}": Your grade is B\n`);
  } else if (marks >= 35 && marks < 50) {
    console.log(`Your marks is "${marks}": Your grade is c, Need to improve\n`);
  } else if (marks > 0 && marks < 35) {
    console.log(`Your marks is "${marks}": Sorry!!!........ You are fail\n`);
  }
};
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
gradeCalculation("91");
gradeCalculation("Eighty");
console.log(`\n========================================================`);
