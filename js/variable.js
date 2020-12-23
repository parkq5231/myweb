let something = null;
// something = 1 > 2;

if (something) {
    console.log('참.');
} else {
    console.log('거짓.');
}
// object
something = {
    name: 'Hong',
    age: 20,
    phone: '010-1234-1234'
}
let name = something.name;
let age2 = something['age'];

for (field in something) {
    console.log(field, something[field]);
}
console.log(age2);

let nameAry = ['Hong', 'Park', 'Kim','Hwang','Lee'];
let name1 = nameAry[0];
let name2 = nameAry[1];
nameAry[2]='Choi';

for (let i = 0; i < nameAry.length; i++) {
    console.log('nameAry['+i+']=> '+nameAry[i]);
}

document.write('<table border=1>');
document.write('<tr><th>순번</th><th>이름</th>')
let i=1;
for(aaa of nameAry ){

    document.write('<tr><td>'+ i++ +'</td><td>'+aaa+'</td></tr>');
}

document.write('</tr></table>');







