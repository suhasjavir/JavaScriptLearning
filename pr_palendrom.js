var str = "12345";
var strlen = str.length;
for (let index = 0; index < strlen / 2; index++) {
   
    if(str[index]== str[strlen-1 - index]){
        console.log("palendrom");
    }else{
        console.log("not palendrom");
    }
}