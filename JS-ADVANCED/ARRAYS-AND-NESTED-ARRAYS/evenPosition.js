function findingEvenPosition(arr1){
    let result = ``
    for(let i=0; i<arr1.length; i++){
        if(i%2===0){
            result += arr1[i] + ' ';
        }
    }
    console.log(result);
}

findingEvenPosition([10,30,50])