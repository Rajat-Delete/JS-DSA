//Write a Function that takes a string and returns the number of word in the sentence that starts with vowel

function countVowel(str){
    let arr = str.split(' ');
    let count = 0;
    for(let i=0;i<arr.length;i++){
        if(arr[i][0] === 'a'|| arr[i][0] === 'e'||arr[i][0] === 'i'||arr[i][0] === 'o'||arr[i][0] === 'u'||arr[i][0] === 'A'||arr[i][0] === 'E'||
            arr[i][0] === 'I'||arr[i][0] === 'O'||arr[i][0] === 'U'){
                count++;
            }
         
    }
    console.log(`Number of words in the String are ${count}`);
}

countVowel('ey Aharlie I');