function square(n){
    return n+n;
}

arr = [1,2,4,5,5];

let y = arr.map(square);
console.log(y);

//If the function we are passing into the map takes two arguments then
//the first one is actually the value and second one is the Index
//Eg below

function fun(value, index){
    console.log(`Array element at ${index} is ${value}`);
}

arr.map(fun);
