
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



function drawTable(){
    let tbl=document.createElement('table');
    tbl.setAttribute('border','1');

    let trTag=document.createElement('tr');
    tbl.append(trTag);

    let tdTag=document.createElement('td');
    persons.forEach(function (a,b,c){
        for (item in a){
            tdTag.innerHTML=a[item];
        }
    })
        trTag.append(tdTag);
    
    let div =document.getElementById('show2');
    div.append(tbl);



}