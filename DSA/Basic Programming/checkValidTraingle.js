 //Given three intgers a,b,c. Check If we can form a valid traingle with the three sides of the triangle a,b,c

 let a=10;
 let b=11;
 let c =12;
 function checkValidTraingle(a,b,c){
    if((a+b>c) && (b+c>a) && (c+a>b) ){
        console.log('These three sides can form a Valid Traingle');
    }else{
        console.log('Cant form a Valid Traingle');
    }
 }

 checkValidTraingle(a,b,c);