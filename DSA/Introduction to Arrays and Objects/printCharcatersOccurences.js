//Given a String, try to print no. of occurences of each unique character of the String

/*
Ex : JAVASCRIPT

J 1
A 2
V 1
S 1
R 1
I 1
P 1
T 1


*/

function findFrequency(Str){
    let obj = {};
    for(let value of Str){
        if(obj[value]){
            obj[value]+=1;
        }else{
            obj[value]=1;
        }
    }
    console.log(obj);
}

findFrequency('Javascript');