const arrSum = (arr) =>{
   
    const sum = arr.reduce((prev, curr)=>{
        return prev + curr;
    });

    return sum;
}

console.log(arrSum([1,2,3]));