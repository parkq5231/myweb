
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


let tbl=document.createElement('table');
tbl.setAttribute('border','1');

function drawTable(){
    let trTag=document.createElement('tr');
    let titles=['이름','나이','점수'];


    for (title in titles){
        let thTag=document.createElement('th');
        thTag.innerHTML=titles[title];
        trTag.append(thTag);
    }
    tbl.append(trTag);
    
    persons.forEach(function (a,b,c){
        let trTag=document.createElement('tr');

        for (item in a){
            let tdTag=document.createElement('td');
            tdTag.innerHTML=a[item];
            trTag.append(tdTag);
        }
        tbl.append(trTag);
    })
    let div =document.getElementById('show2');
    div.append(tbl);
}