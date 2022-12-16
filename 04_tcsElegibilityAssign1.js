var tcsElegibility = function (gradScore, hscScore, sscScore, candName) {
  var name = candName;
  var elegibillity =
    gradScore >= 70 || hscScore >= 80 || sscScore >= 90
      ? `Congrates ${name} You are Eligible for TCS interview.`
      : `Unfortunately ${name} You are not Eligible for TCS interview.`;
  return elegibillity;
};
var elegibillity = tcsElegibility(80, 90, 92, "Suhas");
console.log(`${elegibillity}`);
var elegibillity = tcsElegibility(70, 65, 55, "Santosh");
console.log(`${elegibillity}`);
var elegibillity = tcsElegibility(60, 79, 88, "Pramod");
console.log(`${elegibillity}`);
