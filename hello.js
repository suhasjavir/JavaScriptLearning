function maleMarriageEligibility(gender, age, boyName) {
    var male = gender;
    var eleOrNot = (gender == male && age >= 21) ? `Eligible` : `Not Eligible`;
    console.log(`Hey "${boyName}" you are "${eleOrNot}" for Marriage.`);  
    // return result;
  }
  maleMarriageEligibility("Male", 25, "Billgets");
  maleMarriageEligibility("Male", 17, "Stew Jobs");

