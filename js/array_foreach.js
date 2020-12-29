// array_foreach.js

let persons = ['Hong','Hwang','Park','Choi'];

// // persons.forEach(myCallback);
// function myCallback(a, b, c){
//     console.log(a, b, c);
// }

persons = [];
let person = { 
    name: '이혜빈',
    age: 20,
    score: 90    
};

persons.push(person);

let person1 = {};
    person1.name='이나경';
    person1.age=21;
    person1.score=80;
persons.push(person1);

// persons.push('송다희'); //이런식도 가능

// console.log(persons);
    
let tbTag = document.createElement('table');
tbTag.setAttribute('border','1');

function drawTable(){
    let titles=['이름','나이','점수'];

    let trTag = document.createElement('tr');
    for(title of titles){
        let thTag = document.createElement('th');
        thTag.innerHTML=title;
        trTag.append(thTag);    
    }
    tbTag.append(trTag); // 타이틀생성

    persons.forEach(aabc); //persons안에 들어있는 배열만큼 반복하겠음
    document.getElementById('show').append(tbTag);
} 

function aabc(item,b,c){
    let trTag = document.createElement('tr');
        for(field in item){
            let tdTag = document.createElement('td');
            tdTag.innerHTML=item[field];
            trTag.append(tdTag);    
        }
        tbTag.append(trTag);
};