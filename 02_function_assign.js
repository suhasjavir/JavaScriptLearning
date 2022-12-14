function lineOne(){
    console.log("Do it now.");
}
function lineTwo(){
    console.log("Sometimes 'later' becomes 'never'.");
}
lineOne();
lineTwo();
console.log("=============================================");

function personalDetails(firstName, lastName, collageName){
    console.log("first Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Collage Name:", collageName);
}
personalDetails("Suhas", "Javir", "Tilak Maharastra University");
console.log("=============================================");
function swapValuesDude(val1, val2){
    console.log("Befor Swap:", val1, val2);
    var temp = val1;
    val1 =val2;
    val2 = temp;
    console.log("After Swap:", val1, val2);
}
swapValuesDude("virat", "Anushka");
swapValuesDude(1000, 2000);
console.log("=============================================");
function addThreeValues(no1, no2, no3){
    console.log("Addition Of Given Three Values:", no1 + no2 + no3);
}
addThreeValues(10.23, 600,40);
addThreeValues("Hello ", "Good ", "Morning");