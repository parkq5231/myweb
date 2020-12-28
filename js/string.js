//string.js  W3school에선 JS Strings
let str = 'Please locate where "locate" occurs!';
let strLength = str.length
console.log(strLength);

// indexOf, lastIndexOf=뒤에서부터계산,search

strLeng = str.search('locate');
console.log(strLeng)
console.log(str.indexOf("locate", 13));

// slice, substring, substr

let fruit = 'Apple, Banana, Kiwi';
result = fruit.slice(0, 5);

let from = fruit.indexOf('Banana');
result = fruit.substr(from,6);
console.log(result);

console.clear();
// replace
let newFruit = fruit.replace('Banana','Orange');
console.log(newFruit);

// toUpperCase, toLowerCase, concat, trim, padStart, padEnd
//concat 문장연결, trim 좌우 여백잘라줌

console.log('good    hello     '.trim().toUpperCase());
console.log('5'.padEnd(4,'김'));


let url="http://www.naver.net";
console.log(url.replace('net','com'));
console.log(url.replace(url.substring(url.lastIndexOf('.')),'.com'));

let fruits = fruit.split(',');
for (f of fruits){
    console.log(f.trim());
}
