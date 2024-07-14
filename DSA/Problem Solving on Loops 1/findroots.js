//given three numbers a,b,c which represent roots of quadratic equation ax2 + bx+c
//Find the roots of the quadratic equation

//Hint : (-b+-sqrt(b2 - 4ac))/2a

function findRoots(a,b,c){
    let half = Math.sqrt(b*b - 4*a*c);
    //console.log(half);

    let root1 = (-b+half)/(2*a);
    let root2 = (-b-half)/(2*a);
    console.log(`Roots are ${root1} and ${root2}`);
}

findRoots(1,-7,10);