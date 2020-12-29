// array2.js

let fruits = ['Apple', 'Banana'];
fruits[2] = 'Melon';
fruits[fruits.length] = 'Orange';
fruits[fruits.length] = 'Mango';
fruits[2] = 'new Melon';
delete fruits[2];

// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }

fruits = [];
fruits.push('Apple');
fruits.push('Banana');
fruits.unshift('Orange');
fruits.unshift('Melon');

// fruits.pop();
// fruits.shift();
//M , O , A , B
let fruit = fruits.splice(1, 0, 'new Orange', 'new apple');
console.log(fruit);

for (fruit of fruits) {
    console.log(fruit);
}

fruits = ['Apple', 'Banana', 'Mango'];
fruit = {
    name:'Apple',
    price: 2000 ,
    weight: 50
}

fruit['name']; // field name based // fruit.name과 같다.
fruits[0]; // index based
