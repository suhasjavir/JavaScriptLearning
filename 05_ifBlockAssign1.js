var voterElegibility = function (age) {
  var voterAge = age;
  console.log(`Voting Elegibility :`);
  console.log(`age :  ${voterAge}`);
  if (voterAge >= 18 && voterAge <= 120) {
    console.log(`result : You are elegible for vote`);
  }
  if (voterAge <= 0 || voterAge >= 121) {
    console.log(`result : invalid data`);
  }
  if (voterAge < 18 && voterAge >= 1) {
    console.log(`result : Sorry you are not elegible for vote`);
  }
};
voterElegibility(45);
voterElegibility(17);
voterElegibility(8);
voterElegibility(20);
voterElegibility(-10);
voterElegibility(200);
voterElegibility(0);
