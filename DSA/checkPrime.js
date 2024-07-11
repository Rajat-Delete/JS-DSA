//Given a number x, wriet a function to determine whether the number is prime or not

function checkPrime(x){
    let isprime= true;
    //console.log(Math.ceil(x/2));
    for(let i=2;i<=Math.ceil(x/2);i++){
        if(x%i === 0){
            isprime=false;
        }
    }
    console.log(`${x} is ${isprime}`);
}

checkPrime(2);