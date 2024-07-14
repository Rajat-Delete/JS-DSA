//Given a number n, print the below pattern

//n=5
/*

*****
****
***
**
*

*/

function printPattern(n){
    //For a given row 
    //we have to print n-i+1 stars
    for(let i=1;i<=n;i++){
        let str = '';
        for(let stars =1;stars <= n-i+1;stars++){
            str = str+'*';
        }
        console.log(str);
    }
}

printPattern(10);