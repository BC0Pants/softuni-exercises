function handleFindingPreviousDay(year,month,day){
    const date = new Date(year, month-1, day);
    date.setDate(date.getDate()-1);

    console.log(`${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`);
}

handleFindingPreviousDay(2016, 9, 30)