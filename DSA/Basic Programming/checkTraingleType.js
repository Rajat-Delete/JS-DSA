//Given the side length of the Traingle check whether they can form equilateral, scalene or isoceles Traingle

let a=11;
let b=11;
let c=11;

function checkTraingleType(a,b,c){
    if(a === b && b ===c){
        console.log('Equilateral Triangle');
    }else if(a!== b && b!==c){
        console.log('Scalene Traingle');
    }else{
        console.log('Isoceles Traingle');
    }
}

checkTraingleType(a,b,c);