//Given a array of Strings , print all the unique strings in the array

//Eg : ['abc','Hello','c','d','abc','c','d']

function findUniqueStrings(nums){
    let obj = {};
    for(let value of nums){
        if(obj[value]){
            obj[value]+=1;
        }else{
            obj[value]=1;
        }
    }
    console.log(obj);
    for(let value in obj){
        if(obj[value] === 1){
            console.log(value);
        }
    }
}

findUniqueStrings(['abc','Hello','c','d','abc','c','d'])