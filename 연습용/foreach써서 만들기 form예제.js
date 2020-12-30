let days=['월','화','수','목','금','토','일'];
let dates=[];

let table=document.createElement('table');
let tr=document.createElement('tr');

for (abc of days){
    let td=document.createElement('td');
    td.innerHTML=abc;
    tr.append(td);
}

table.setAttribute('border','1');
table.append(tr);
let show4=document.getElementById('show4');
show4.append(table);