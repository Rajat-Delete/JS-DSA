//Making a custom Mapper 
//We have to make a custom mapper , it will take array and function as argument and returns the new Array from it

arr = [13,2,4,2,32,54,5]

function customMapper(arr,fun){
    let newArr = [];
    for(let i=0;i<arr.length;i++){
        newArr.push(fun(arr[i]));
    }
    console.log(newArr);
}

function add(i){
    return i+i;
}

customMapper(arr,add);

