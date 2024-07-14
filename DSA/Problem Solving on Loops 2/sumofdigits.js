//Given a number x, calculate the sum of its digits
//Eg : 4136 - 14

function findSum(num){
    let sum=0;
    while(num>0){
        let rem = num%10;
        num = Math.floor(num/10);
        sum=sum+rem;
    }
    return sum;
}

console.log(findSum(4136));