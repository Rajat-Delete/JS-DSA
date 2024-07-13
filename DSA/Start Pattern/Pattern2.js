//For a given value n, print the following pattern on screen
//n is a positive Integer

/*
n=4

*
**
***
****

*/


function printPattern(n){
    //outer loop is gona run n times
    //inner loop is going to run on row number times
    for(let i=1;i<=n;i++){
        let str = '';
        for(let k =0;k<i;k++){
            str = str+'*';
        }
        console.log(str);
    }
}

printPattern(5);