function maleMarriageEligibility(gender, age, boyName){
    var male = gender;
    var eleOrNot = gender == male && age >= 21 ? "Eligible" : "Not Eligible";
    console.log(`Hey "${boyName}" you are "${eleOrNot}" for Marriage.`  );
}
maleMarriageEligibility("Male", 25, "Billgets");
maleMarriageEligibility("Male", 17, "Stew Jobs");
console.log(`======================================================`);

function femaleMarriageEligibility(gender, age, girlName){
    var male = gender;
    var eleOrNot = gender == male && age >= 18 ? "Eligible" : "Not Eligible";
    console.log(`Hey "${boyName}" you are "${eleOrNot}" for Marriage.`  );
}
maleMarriageEligibility("Female", 16, "Jenifer");
maleMarriageEligibility("Female", 27, "Malinda Gates");