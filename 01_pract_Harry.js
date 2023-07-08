console.log(`1) Declare a variable as string and try to add any number in that string`);
let a = "Suhas";
let b = 30000;
console.log(`${a + " " + b}`);
console.log("type of a and b is:", typeof(a+b));
console.log(`---------------------------------------------`);
console.log(`2) Create an object and try to add elements in that:`);
const c = {
    name: "suhas",
    company: "Congnigent",
    id: 161
}
c['salary']= 45000;
c['project']= "Humana Medilife";
console.log(c);

console.log(`---------------------------------------------`);
console.log(`3) Create an object for dictionary and add the five words and it's meaning 
 & try to access all element of that object.`);
const dictionary = {
    abnormal:"different from what is usual or expected",
    excellence: "the quality of being extremely good",
    conclude: "to decide or believe something as a result of what you have heard or seen",
    competition: "an event in which people compete with each other to find out who is the best at something",
    emphasis: "special importance that is given to something"  
}
console.log("*** printing dictionary object:\n", dictionary);
console.log(`\n*** printing each element of dictionary object one by one:\n`);
console.log(`abnormal: ${dictionary.abnormal}`);
console.log(`excellence: ${dictionary.excellence}`);
console.log(`conclude: ${dictionary.conclude}`);
console.log(`competition:${dictionary.competition}`);
console.log(`emphasis: ${dictionary.emphasis}`);