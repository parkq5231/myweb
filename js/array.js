//array.js
let friend1={
    name:'송다희',
    age:'20',
    hobby:'코딩',
    grade:'A'
}
let friend2={
    name:'김김',
    age:'21',
    hobby:'코딩2',
    grade:'B'
}
let friend3={
    name:'이이',
    age:'22',
    hobby:'코딩3',
    grade:'C'
}
let friends=[friend1,friend2,friend3];

document.write('<table border=1>');
document.write('<tr><th>이름</th><th>나이</th><th>취미</th>');
let i=1;
for(aa2 of friends){
    document.write('<tr><td>'+aa2.name+'</td><td>'+aa2.age+'</td><td>'+aa2.hobby+'</tr>');
}
document.write('</tr></table>');

document.write('---------');

document.write('<table border=1><tr>');
for (free in friend1){
    document.write('<th>'+free+'</th>');
}
document.write('</tr>');

for(friend of friends){
    document.write('<tr>');
    for(field in friend){
        document.write('<td>'+friend[field]+'</td>');
    }
    document.write('</tr>');
}
document.write('</table>');

//
let numbers=[3,4,8,9,12,83,22];
let sum=0;
for(num of numbers){
    if(sum<num){
        sum=num;
    }
}
document.write('가장 큰수: '+sum);