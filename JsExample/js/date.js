//date.js

//let today = new Date('2020-12-01'); //GMT 기준 초기값이 설정됨
// today.setMonth(0); console.log(today.getDay());

//function setCal(yyyy, mm, dd) {
//    let today = new Date(yyyy + '-' + mm + '-' + dd);
//    today = new Date(yyyy, mm, 0);
//     console.log(today.getDate());
//}
// setCal('2020','06','05');

//Date객체 생성
let today = new Date();

let setDate = new Date(year,month-1,1);

let firstDay=setDate.getDate();

let firstDayName=setDate.getDay();

let lastDay=new Date(
    today.getFullYear(),
    today.getMonth()+1,
    0
).getDate();


console.log(today,setDate,firstDay,firstDayName,lastDay);

