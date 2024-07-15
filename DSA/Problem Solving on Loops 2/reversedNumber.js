//Given a number n, print its reversed number


//Apprach 1 : taking remainder from the number and adding it to the new string and returning
function reverseNumber(num){
    let str = '';
    while(num>0){
        let rem=num%10;
        //console.log(rem, str);
        num=Math.floor(num/10);
        str=str+rem;
    }
    console.log(str);
}

reverseNumber(12034);