function rearrangePositiveNegativeNums(arr1){
    let arr2 = [];

    for (const num of arr1) {
        if(num<0){
            arr2.unshift(num);
        }
        else{
            arr2.push(num)
        }
    
    }

    //console.log(arr2);
    return arr2
}

rearrangePositiveNegativeNums([0,5,-6,13,-9,-1])