function findArtifacts(input) {
    const text = input[0];

    const pattern = /(?<artifact>([\*^]+)([A-Za-z ]{6,})([\*^]+))(\W+)?([\+]+)([\-]?[0-9]+\.[0-9]+),([\-]?[0-9]+\.[0-9]+)([\+]+)/g;
    
    const matches = text.matchAll(pattern);
    
    const foundMessages = [];
    
    for (const match of matches) {
        const artifactName = match.groups.artifact.slice(1, -1); 
        const coordinates = `${match[7]},${match[8]}`;
        

        foundMessages.push(`Found ${artifactName} at coordinates ${coordinates}.`);
    }
    
    if (foundMessages.length > 0) {
        foundMessages.forEach(message => console.log(message));
    } else {
        console.log("No valid artifacts found.");
    }
}

// findArtifacts(['*Lost Crown*+++34.807,-40.479+++^Ancient Sword^++++48.8566,2.3522++++*Golden Statue*!!!+12.492,99.901+'])