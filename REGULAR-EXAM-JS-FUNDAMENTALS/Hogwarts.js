function spellCasting(inputArray){
    let spell = inputArray.shift();
    let command = inputArray.shift();

    while(command !== "Abracadabra"){
        let tokens = command.split(" ");
        let action = tokens.shift();
        
        if(action=== "Abjuration"){
            spell = spell.toUpperCase();
            console.log(spell);
        }
        else if(action=== "Necromancy"){
            spell = spell.toLowerCase();
            console.log(spell);
        }
        else if(action=== "Illusion"){
            let letterToChange = tokens.shift();
            let letter = tokens.shift();

            if(letterToChange<=spell.length - 1){
                let tempDelete = spell.substring(0,letterToChange);
                spell = spell.replace(tempDelete,"");
                spell = spell.replace(spell[0],letter);
                spell = tempDelete + spell;
                console.log("Done!");
            }
            else{
                console.log("The spell was too weak.");
            }
        }
        else if(action=== "Divination"){
            let firstSubstring = tokens.shift();
            let secondSubstring = tokens.shift();

            if(spell.includes(firstSubstring)){
                while(spell.includes(firstSubstring)){
                    spell = spell.replace(firstSubstring,secondSubstring);
                }
                console.log(spell);
            }

        }
        else if(action=== "Alteration"){
            let substringToRemove = tokens.shift();

            if(spell.includes(substringToRemove)){
                spell = spell.replace(substringToRemove,"");
                console.log(spell);
            }
        }
        else{
            console.log("The spell did not work!");
        }

        command = inputArray.shift();
    }

}

// spellCasting(["A7ci0",
//     "Illusion 1 c",
//     "Illusion 4 o",
//     "Abjuration",
//     "Abracadabra"])