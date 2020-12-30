//array_map.js
let person = {}; //new Object(); Object타입
person.name = 'Hong';
person.age = 20;

person = {
    name: 'Hwang',
    age: 15
}
console.log(person);

function Person(name,age){
    this.name=name;
    this.age=age;
}
person=new Person('Park',20);
console.log(person);

let persons=[];//배열타입변수
persons.push(person);
persons.push(new Person ('Choi',21));

console.log(persons);


let names = persons.map(function (a,b,c){
    let member={};
    member.id = a.name +'-'+b;
    member.age=a.age;
    return member;
});
names.forEach(function (a,b,c){
    document.write('<h1>'+a.id+'/')
})
console.log(names);

let over21 =persons.filter(function(a,b,c){
    return a.age >=21;
}).map(function (a,b,c){
    return a.name;
});
console.log(over21);






