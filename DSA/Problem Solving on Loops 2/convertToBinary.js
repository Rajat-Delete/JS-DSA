//Given a decimal number x, convert it into binary number

//Eg 5->101 , 7->111

function convertBinary(num){
    let str='';
    while(num>0){
        let lastbit=num%2;
        num = Math.floor(num/2);
        str= lastbit+str;
    }
    console.log(str);
}

convertBinary(8);