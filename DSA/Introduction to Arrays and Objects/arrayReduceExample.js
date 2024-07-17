const arr = [{name : 'Kevin Thomas Book', price: 1000},{name : 'Google Echo',price : 2499},{name :'Apple Airpods',price : 16999}];


//Now suppose this is a Order cart and we need to find the sum of the items in the cart

function findSum(initial,current){
    console.log(initial,current);
    return {price : initial.price + current.price};
}

let j = arr.reduce(findSum);
console.log(j);

