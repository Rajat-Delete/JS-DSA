//Objects in JS is usually a Key Value Pair

let x = {
    name : 'Rajat',
    age : 27,
}

console.log(x['name']);
console.log(x.name);

//Objects are mutuable, means we can update the Objects in JS

//Eg : 

x.name = 'Sanyam';
console.log(x);

//In case if Key is not present, then it will give me undefined

//to delete a key value pair, we can do
delete x.name;
console.log(x);