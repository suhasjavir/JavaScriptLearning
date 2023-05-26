const arraydup = [10,17,16,98,10,52,98];
   let unique = arraydup.filter((value, index)=>{
    // return arraydup.indexOf(value) == index;  
    //using this we can remove duplicate elements from array, and print only unique nos.

    return arraydup.indexOf(value) != index;
    //using this we can find duplicate elements from array, and print only duplicate nos.
    });
 console.log(unique);

 const arr = [1, 2, 3, 2, 1, 4];
 let uniqueno = arr.filter((value, index)=>{
    return arr.indexOf(value) == index;  
    //using this we can remove duplicate elements from array, and print only unique nos.

    // return arr.indexOf(value) != index;
    //using this we can find duplicate elements from array, and print only duplicate nos.
    });
 console.log(uniqueno);