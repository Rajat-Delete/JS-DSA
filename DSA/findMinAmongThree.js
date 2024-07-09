//Given three integer values and find the minimum among given input values

let x =14;
let y =10;
let z = 12;

function findmin(x,y,z){
    if(x<y && x<z){
        console.log('x is minimum');
    }else if(y<x && y<z){
        console.log('y is minimum');
    }else if(z<x && z<y){
        console.log('z is minimum');
    }else{
        console.log('Either of the Numbers are equal')
    }
}

findmin(x,y,z);