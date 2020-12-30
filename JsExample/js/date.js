//date.js

//let today = new Date('2020-12-01'); //GMT 기준 초기값이 설정됨
// today.setMonth(0); console.log(today.getDay());

//function setCal(yyyy, mm, dd) {
//    let today = new Date(yyyy + '-' + mm + '-' + dd);
//    today = new Date(yyyy, mm, 0);
//     console.log(today.getDate());
//}
// setCal('2020','06','05');

let tbl=document.createElement('table');
tbl.setAttribute('border','1');
let tr=document.createElement('tr');
tbl.append(tr)

calendar(2020,12);
function calendar(yyyy,mm){
    // let dates=[];
    let today = new Date(yyyy,mm,0);
    let lastday=today.getDate();
    for(i=0;i<=lastday;i++){
        // dates.push(i);
        if(i % 7==0){
            tr=document.createElement('tr');
        }
        let td=document.createElement('td');
        td.innerHTML=i;
        tr.append(td);
        tbl.append(tr);
    }
    let show =document.getElementById('show');
    show.append(tbl);
}
// new Date(2020-06-01) ->getDay로 받고    (1)
// new Date(2020,06,0) -> getDate로 받는다 (말일)