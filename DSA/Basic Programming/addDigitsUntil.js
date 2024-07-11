//Given a Integer Number , repeatedely add all its digits until the result has only one digit and return it

//eg = 190


function returnSum(num){
    //first is to find the sum of the number
    let sum = 0;
    while(num>0){
        let rem = num%10;
        num = Math.floor(num/10);
        sum =sum+rem;
    }
    return sum;
}

function findSum(number){
    let k = returnSum(number);
    while(k>=10){
        k = returnSum(k);
    }
    console.log('value is',k);
}

findSum(1001010);