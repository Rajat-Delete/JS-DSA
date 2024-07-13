//Given a integer , find the sum of the digits based on the below criteria
//the most significant digit is a positive integer
//Each other digit is a opposite sign to it's adjacent sides
//return the sum of all the digits with their corresponding sign


//considering two cases
//either it will be even digit number or it will be odd digit number
//32 -> -2+3 -> +1
//22345 -> -2+2-3+4-5 -> -4

//logic used is such that anywys answer is going to differ in terms of sign only , so add in a fashion and check how many digits are there in the end and then update the ans.

function calculateSum(number){
    let count = 0;
    let sum = 0;
    while(number>0){
        count++;
        let rem = number%10;
        number = Math.floor(number/10);
        if(count%2 === 0){
            sum=sum+rem;
        }else{
            sum = sum-rem;
        }
    }
    if(count%2 !== 0){
        return -sum;
    }else{
        return sum;
    }
}

console.log(calculateSum(36));