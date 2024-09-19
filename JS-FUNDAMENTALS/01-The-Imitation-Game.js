function decoding(inputArray){
    let message = inputArray.shift();
    let command = inputArray.shift();

    while(command !== 'Decode'){
        let tokens = command.split('|');
        let action = tokens.shift();

        if(action === 'Move'){
            let countOfLetters = Number(tokens.shift());
            let lettersToMove = message.substring(0,countOfLetters);
            message = message.replace(lettersToMove,'');
            message = message.concat(lettersToMove);
        }
        else if(action === 'Insert'){
            let indexToInsert = tokens.shift();
            let valueToInsert = tokens.shift();
            let lettersToChangeIndex = message.substring(indexToInsert);
            message = message.replace(lettersToChangeIndex, '');
            message = message.concat(valueToInsert);
            message = message.concat(lettersToChangeIndex)

        }
        else if(action === 'ChangeAll'){
            let substringToReplace = tokens.shift();
            let replacement = tokens.shift();
            while(message.includes(substringToReplace)){
                message = message.replace(substringToReplace,replacement)
            }
        }

        // console.log(command);
        command = inputArray.shift();
    }

    console.log(`The decrypted message is: ${message}`);
}

// decoding([
//     'zzHe',
//     'ChangeAll|z|l',
//     'Insert|2|o',
//     'Move|3',
//     'Decode'
//   ])