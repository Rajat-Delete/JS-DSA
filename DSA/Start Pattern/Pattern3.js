//Given a value n , print the following pattern on the screen

/*

n=4
   *
  **
 ***
****

*/

function printPattern(n){
    //n number of rows print krni hh
    //i number of stars, n-i number of spaces


    for(let i=1;i<=n;i++){
        let str = '';
        let spaces = n-i;
        for(let k=1;k<=spaces;k++){
            str = str+' ';
        }
        for(let j=1;j<=i;j++){
            str  =str+'*';
        }
        console.log(str);
    }
}

printPattern(5);