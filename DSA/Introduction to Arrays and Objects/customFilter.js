//create a custom filter to mimic the Filter function of Array

function customFilter(arr , fun){
    let newArr = [];
    for(let i=0;i<arr.length;i++){
        if(fun(arr[i])){
            newArr.push(arr[i]);
        }
    }
    console.log(newArr);
}

function oddEven(x){
    return x%2 ===0 ? true : false;
}

arr = [1,2,3,4,56,3,7,89,0,13]

customFilter(arr,oddEven);
