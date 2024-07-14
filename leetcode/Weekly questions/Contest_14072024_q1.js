/*


Code
Testcase
Test Result
Test Result
3216. Lexicographically Smallest String After a Swap
Solved
Easy
Companies
Hint
Given a string s containing only digits, return the 
lexicographically smallest string
 that can be obtained after swapping adjacent digits in s with the same parity at most once.

Digits have the same parity if both are odd or both are even. For example, 5 and 9, as well as 2 and 4, have the same parity, while 6 and 9 do not.

 

Example 1:

Input: s = "45320"

Output: "43520"

Explanation:

s[1] == '5' and s[2] == '3' both have the same parity, and swapping them results in the lexicographically smallest string.

Example 2:

Input: s = "001"

Output: "001"

Explanation:

There is no need to perform a swap because s is already the lexicographically smallest.

 

Constraints:

2 <= s.length <= 100
s consists only of digits.

*/
var getSmallestString = function(s) {
    let arr = s.split('');
        for(let i=0;i<arr.length;i++){
            if(checkEven(arr[i]) && checkEven(arr[i+1]) || checkOdd(arr[i]) && checkOdd(arr[i+1])){
                let temp = arr[i];
                arr[i]=arr[i+1];
                arr[i+1]=temp;
                //console.log(arr);
                //console.log(BigInt(arr.join('')) , BigInt(s));
                if(BigInt(arr.join('')) < BigInt(s)){
                    return arr.join('');
                }else{
                    arr=s.split('');
                }
            }
        }
        //console.log('code here');
        return s;
};

function checkOdd(i){
    if(Number(i)%2 === 0)
        return false;
    else
        return true;
}

function checkEven(i){
    if(Number(i)%2 === 0)
        return true;
    else
        return false;
}
