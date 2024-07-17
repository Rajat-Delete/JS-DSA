//Suppose we have some object and we want to get the data out of it ie. if we want to get only keys

let object = {
    'a': 1,
    'b': 2,
    'c': 3,
    'd': 4
}

let keys= Object.keys(object);
console.log(`Keys of Object are ${keys}`);

let values = Object.values(object);
console.log(`Values of Object are ${values}`);

//now if we want to take out the key value pairs of object then we can do

let entries = Object.entries(object);
console.log(`Entries of Object are : ${entries}`);
for(let value of entries){
    console.log(entries);
}

for(let values1 in object){
    console.log(values1, object[values1]);
}