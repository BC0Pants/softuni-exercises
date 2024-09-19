function solve(fruit, weightInG, pricePerKg){
    let weightInKg = weightInG/1000
    let sumOfMoney = weightInKg * pricePerKg;

    console.log(`I need $${sumOfMoney.toFixed(2)} to buy ${weightInKg.toFixed(2)} kilograms ${fruit}.`);
}

solve('orange', 2500, 1.80)
