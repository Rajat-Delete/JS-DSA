
// function checkOdd(i){
//     if(Number(i)%2 === 0)
//         return false;
//     else
//         return true;
// }

// function checkEven(i){
//     if(Number(i)%2 === 0)
//         return true;
//     else
//         return false;
// }


// var getSmallestString = function(s) {
//         let arr = s.split('');
//         for(let i=0;i<arr.length;i++){
//             if(checkEven(arr[i]) && checkEven(arr[i+1]) || checkOdd(arr[i]) && checkOdd(arr[i+1])){
//                 let temp = arr[i];
//                 arr[i]=arr[i+1];
//                 arr[i+1]=temp;
//                 //console.log(arr);
//                 //console.log(BigInt(arr.join('')) , BigInt(s));
//                 if(BigInt(arr.join('')) < BigInt(s)){
//                     return arr.join('');
//                 }else{
//                     arr=s.split('');
//                 }
//             }
//         }
//         //console.log('code here');
//         return s;
// }; 

// console.log(getSmallestString("0000000001111111111222222222233333333334444444444555555555566666666667777777777888888888899999999991"));

//"0000000001111111111222222222233333333334444444444555555555566666666667777777777888888888899999999919"

