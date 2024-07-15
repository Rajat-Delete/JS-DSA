//Given two numbers a and b, calculate the LCM of two numbers

//Hint : there is a relation between HCF and LCM that numbers multiplcation is equal to HCF and LCM

function findLCM(a,b){
    //first we will be finding HCF of two numbers
    let HCF;
    let LCM;
    for(let i=2;i<Math.min(a,b);i++){
        if(a%i===0 && b%i===0){
            HCF = i;
        }
    }
    LCM = (a*b)/HCF;
    return LCM;
}

console.log(findLCM(9,12));