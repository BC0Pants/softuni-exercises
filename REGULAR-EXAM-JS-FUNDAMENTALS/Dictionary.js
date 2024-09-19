function notebookManagement(input) {
    const [wordDefinitions, testWords, command] = input;

    const wordDefPairs = wordDefinitions.split(' | ');
    const testWordsArray = testWords.split(' | ');

    const notebook = {};

    for (const wordDef of wordDefPairs) {
        const [word, definition] = wordDef.split(': ');
        if (!notebook[word]) {
            notebook[word] = [];
        }
        notebook[word].push(definition);
    }

    if (command === 'Test') {
        for (const word of testWordsArray) {
            if (notebook[word]) {
                console.log(`${word}:`);
                for (const definition of notebook[word]) {
                    console.log(` -${definition}`);
                }
            }
        }
    } else if (command === 'Hand Over') {
        const words = Object.keys(notebook);
        console.log(words.join(' '));
    }
}


// notebookManagement(["care: worry, anxiety, or concern | care: a state of mind in which one is troubled | face: the front part of the head, from the forehead to the chin",
//     "care | kitchen | flower",
//     "Test"]);

    // notebookManagement(["tackle: the equipment required for a task or sport | code: write code for a computer program | bit: a small piece, part, or quantity of something | tackle: make determined efforts to deal with a problem | bit: a short time or distance",
    //     "bit | code | tackle",
    //     "Test"]);