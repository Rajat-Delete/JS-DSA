//Using array Filter

function oddEven(x){
    return x%2 ===0 ? true : false;
}

arr = [1,2,3,4,56,3,7,89,0,13]

let k = arr.filter(oddEven);
console.log(k);