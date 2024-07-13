//Given a number n, print the below pattern
//n=5

/*

n=5
    *
   ***
  *****
 *******
*********

*/

function printPattern(n){
    //For a given line
    //n-i spaces and i stars

    for(let i=1;i<=n;i++){
        let str='';
        for(let j=1;j<=n-i;j++){
            str = str+' ';
        }
        for(let star=1;star<=(2*i -1);star++){
            str=str+'*';
        }
        console.log(str);
    }

}

printPattern(5);