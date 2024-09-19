function handleCheckingNumbers(input){
    let areNumbersSame = true;
    const stringOfInput = input.toString();
    let sumOfAllNums = Number(stringOfInput[0]);
    for(let i =1; i < stringOfInput.length; i++){
        if(stringOfInput[i]!==stringOfInput[i-1]){
            areNumbersSame = false;
        }
        sumOfAllNums += Number(stringOfInput[i])
    }

    console.log(areNumbersSame);
    console.log(sumOfAllNums);
}

handleCheckingNumbers(2222222)