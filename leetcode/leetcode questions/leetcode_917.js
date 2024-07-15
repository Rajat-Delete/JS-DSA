/*

Given a string s, reverse the string according to the following rules:

All the characters that are not English letters remain in the same position.
All the English letters (lowercase or uppercase) should be reversed.
Return s after reversing it.

 

Example 1:

Input: s = "ab-cd"
Output: "dc-ba"
Example 2:

Input: s = "a-bC-dEf-ghIj"
Output: "j-Ih-gfE-dCba"
Example 3:

Input: s = "Test1ng-Leet=code-Q!"
Output: "Qedo1ct-eeLg=ntse-T!"
 

Constraints:

1 <= s.length <= 100
s consists of characters with ASCII values in the range [33, 122].
s does not contain '\"' or '\\'.


*/

var reverseOnlyLetters = function(s) {
    let arr = s.split('');
    for(let i=0,j=s.length-1;i<=j;){
        if(!((s.charCodeAt(i) >=65 && s.charCodeAt(i) <=90 )|| (s.charCodeAt(i) >=97 && s.charCodeAt(i) <=122))){
            i++;
        } 
        else if(!((s.charCodeAt(j) >=65 && s.charCodeAt(j) <=90 )|| (s.charCodeAt(j) >=97 && s.charCodeAt(j) <=122))){
            j--;
        } 
        else{
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            i++;
            j--;
        }
    }
    return arr.join('');
};

console.log(reverseOnlyLetters('Test1ng-Leet=code-Q!'));