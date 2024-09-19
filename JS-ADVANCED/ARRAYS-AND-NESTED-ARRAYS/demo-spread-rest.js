let arr = [10,20,30,40,50]

let [a,b, ...rest] = arr // collects the rest of the elements inside an array

console.log(a, b, rest);

function paramsDemo(a,b,c){
    console.log(a);
    console.log(b);
    console.log(c);
}
let arr2 = [20, 40, 60, 80];

paramsDemo(...arr2) //spreads the elements of the array into multiple variables