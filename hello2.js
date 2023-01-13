function doHomework(callbacks){
    console.log(`Doing homework... Solving tricky problem.`);
    console.log(`Finally, solved`);
    callbacks();
}

function copyHomework(){
    console.log(`Copy homework from friend's notes.`);
}
doHomework(copyHomework);