function walkingTime(steps,footprintMeters,speedKmPerH){
    let distanceToUni = steps * footprintMeters;
    let numOfBreaks = Math.floor(distanceToUni/500);
    let speedMPerS = speedKmPerH /3.6 
    let timeInSeconds =  distanceToUni/speedMPerS + numOfBreaks*60;

    // let time = new Date();
    // time.setHours(0);
    // time.setMinutes(0);
    // time.setSeconds(timeInSeconds);

    let seconds = (timeInSeconds%60).toFixed(2);
    let minutes = (timeInSeconds/60).toFixed(2);
    let hours = (minutes/60).toFixed(2);
    console.log(`${hours}:${minutes}:${seconds}`);
}

walkingTime(4000, 0.60, 5)