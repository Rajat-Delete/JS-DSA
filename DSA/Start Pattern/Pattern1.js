//Given a value n(positive integer) , print the following pattern on the screen

/*

n=4

****
****
****
****


*/

function printPattern(n){
    for(let i=0;i<n;i++){
        let str = '';
        for(let j=0;j<n;j++){
            str = str+'*';
        }
        console.log(str);
    }
}

printPattern(7);