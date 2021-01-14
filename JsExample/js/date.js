//date.js

//let today = new Date('2020-12-01'); //GMT 기준 초기값이 설정됨
// today.setMonth(0); console.log(today.getDay());

//function setCal(yyyy, mm, dd) {
//    let today = new Date(yyyy + '-' + mm + '-' + dd);
//    today = new Date(yyyy, mm, 0);
//     console.log(today.getDate());
//}
// setCal('2020','06','05');
let dates=[];
let tbl=document.createElement('table');
tbl.setAttribute('border','1');
let tr=document.createElement('tr');
tbl.append(tr);
calendar(2020,12);

dates.forEach(aa);

function calendar(yyyy,mm){
    let today = new Date(yyyy,mm,0);
    let today1 = new Date(yyyy+'-'+mm)
    firstday=today1.getDay();
    let lastday=today.getDate();
    for(i=0;i<firstday;i++){
        dates.push(" ");
    }
    for(i=1;i<=lastday;i++){
        dates.push(i);
    }
}
function aa(a,b,c){
    let td=document.createElement('td');
        td.innerHTML=a;
        tr.append(td);
        if(a != " " && a % 7 ==0){
            tr=document.createElement('tr');
        }
        tbl.append(tr);
    }
let show =document.getElementById('show');
show.append(tbl);

// new Date(2020-06-01) ->getDay로 받고    (1)
// new Date(2020,06,0) -> getDate로 받는다 (말일)