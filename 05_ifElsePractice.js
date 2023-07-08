
// check voting eligibillity
let a = 225;
let hasVoterCard = "yes";
if (a<=0 || a>120){
    console.log(`Please enter valid age`);
} else if(a>18 && hasVoterCard == "yes"){
    console.log(`You are elegible, you can vote.`);
} else if(a>18 && hasVoterCard == "no"){
    console.log(`Plese get your voter id card`);
} 
else {
    console.log(`you are minor, you can't vote.`);
}

console.log(`------------------------------------------------`);

console.log(`"if variable is not initilised then it will be return undefined,
you want to show some perticuler value/output.
then use following method."`);
 
let user; // user = "Suhas"
// console.log(user);
console.log(user ?? "Guest User");