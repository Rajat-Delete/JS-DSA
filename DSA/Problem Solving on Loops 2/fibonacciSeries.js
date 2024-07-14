//Given a number n, print the first n fibonacci numbers

//logic is to make two variables for storing last and second last so that we can add up the numbers 

function fibonacciNumbers(n){
    let last=0;
    let secondlast=1;
    if(n === 0){
        console.log(0);
        return;
    }
    if(n>=1){
        console.log(0);
        console.log(1);
    }

    for(let i=2;i<n;i++){
        let nextfib = last +secondlast;
        last = secondlast;
        secondlast=nextfib;
        console.log(nextfib);
    }
}

fibonacciNumbers(10);