//Given a number n, print the below pattern
//n will always be odd
// n=3

/*

  *
 ***
*****
 ***
  *

*/

//element of repetition
//upper half 
//n-i spaces and i stars for ith row

//lower half
//n-1 rows
//for ith row i spaces, 2*n-1 stars


function printUpperHalf(n){

  for(let i=1;i<=n;i++){
    let str = '';
    for(let spaces = 1;spaces<=n-i;spaces++){
      str = str+' ';
    }
    for(let stars=1;stars <= (2*i-1);stars++){
      str = str+'*';
    }
    console.log(str);
  }
}

function printLowerHalf(n){
  for(let  i=0;i<=n;i++){
    let str = '';
    for(let spaces = 1;spaces <= i;spaces++){
      str = str +' ';
    }
    for(let star=1;star<=(2*(n-i)+1);star++){
      str = str+'*';
    }
    console.log(str);
  }
}

function printPattern(n){
  printUpperHalf(n);
  printLowerHalf(n-1);
}

printPattern(5);
