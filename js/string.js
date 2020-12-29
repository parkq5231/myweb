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

let numbers = '990101-1234567';
numbers += ' 990102-2345678',
numbers += ' 000201-3456789',
numbers += ' 000202-4567890';
numbers += ' 0003014567890';

let numAry = numbers.split(' ');
for (num of numAry){
    result=getGender(num);
    console.log('결과: '+result);
}
function getGender(num) {
    let fNum=num.substr(7,1);
    let fYear=num.substr(0,2);
        if (fNum=='1'){
            return '남자';
        }else if(fNum=='2'){
            return '여자';
        }else if(fNum=='3'){
            return '남자';
        }else if(fNum=='4'){
            return '여자';
        }else {
            return '잘못입력';
        }
}//end of function