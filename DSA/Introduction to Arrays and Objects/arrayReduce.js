//Array reduce Function 

arr= [122,123,45,54,23]
//Here initial is actually a accumulator of the previous computation results
function fun(initial,current){
    console.log(initial,current);
    return initial+current;
}

let k = arr.reduce(fun);
console.log(k);