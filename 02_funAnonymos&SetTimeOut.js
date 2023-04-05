console.log(`\n=========== Normal Function ===========\n`);

function show1(){
    console.log("Hello World!!!");
}
show1();

console.log(`\n=========== Function expression ===========\n`);

let show = function(){
    console.log("Hello World!!!!!After 2 sec");
}
show();
console.log(`\n=========== set time out Function ===========\n`);

setTimeout(show, 2000);

console.log(`\n=========== anonymous Function with set timeout ===========\n`);

setTimeout(function(){
    console.log("Hello World!!!!!!!!!After 4 sec");
}, 4000);