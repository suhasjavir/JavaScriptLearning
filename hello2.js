function message (){
    console.log("hello dude");
    return function(){
        console.log("I am learning JS");
    }
}
message()();