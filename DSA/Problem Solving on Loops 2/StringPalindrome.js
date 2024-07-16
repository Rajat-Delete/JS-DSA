//Given a String x, check if the number is palindrome or not

//Eg : 12321 is palindrome

function checkPalindrome(x){
    //logic is to take two indexes i and j pointing at start and end of hte String
    //check for every index and if charcaters are equal then check the inner substring for the same until the indexes overlaps

    for(let i=0,j=x.length-1;i<=j;){
        if(x[i] == x[j]){
            i++,j--
        }else{
            return false;
        }
    }
    return true;
}

console.log(checkPalindrome('11111'));

