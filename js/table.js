//table.js 2020 1217
var tableTag = document.getElementById('tbl');
// document.getElementByIdTagname('a');

var trTag1 = document.createElement('tr');

var tdTag1 = document.createElement('td');
tdTag1.innerHTML="Name";
tdTag1.setAttribute('id','first');
tdTag1.setAttribute('class','title');
var tdTag2 = document.createElement('td');
tdTag2.innerHTML="Age";
tdTag2.setAttribute('class','title');


trTag1.append(tdTag1);
trTag1.append(tdTag2);
tableTag.append(trTag1);


var trTag2=document.createElement('tr');

var tdTag3=document.createElement('td');
var tdTag4=document.createElement('td');
tdTag3.innerHTML="Hong";
tdTag4.innerHTML="15";
tdTag3.setAttribute('id','first');
tdTag3.setAttribute('class','data');
tdTag4.setAttribute('class','data');

trTag2.append(tdTag3);
trTag2.append(tdTag4);
tableTag.append(trTag2);



console.log(tableTag);
console.log(trTag1);
