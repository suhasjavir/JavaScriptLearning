var gradeSystem = function(score){
if(score >= 0 && score < 35){
    console.log("you are fail");
} else
if(score >= 35 && score < 60){
    console.log("you are pass, and your grade is: C");
} else if(score >= 60 && score < 75){
    console.log("you are pass and your grade is: B");
}else if(score >= 75 && score < 90){
    console.log("you are pass and your grade is: A");
}
else if(score >= 90 && score <=100){
    console.log("you are pass and your grade is: A+");
} else if(score < 0 || score > 100){
    console.log("Please enter valid score");
}
}
gradeSystem(33);
gradeSystem(40);
gradeSystem(400);

gradeSystem(70);
gradeSystem(80);
gradeSystem(-45)
gradeSystem(94);
gradeSystem(-12);
gradeSystem(140);
