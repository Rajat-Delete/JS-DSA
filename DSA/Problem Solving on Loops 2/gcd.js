//Given two numbers . we need to find the greatest common divisor or the Highest Common Factor/
//Eg : 28 and 24, so the gcd is 4

//Basic Approach
//iterate from 2 to smallest of two and check which number can divide both

function findGCD(n1,n2){
    let result = 1;
    for(let i=2;i <= Math.min(n1,n2);i++){
        if(n1%i === 0 && n2%i===0){
            result=i;
        }
    }
    console.log(result);
}

findGCD(28,24);
