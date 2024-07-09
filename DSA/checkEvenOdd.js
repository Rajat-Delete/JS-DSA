//check whether the numbers are even or odd between 1 to 50

let n=50;

function checkEvenOdd(n){
    for(let i=0;i<=n;i++){
        if(i%2 === 0){
            console.log(i, 'Even');
        }else{
            console.log(i,' Odd');
        }
    }
}
checkEvenOdd(n);