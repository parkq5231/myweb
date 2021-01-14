let dates=[];
let tbl=document.createElement('table');
tbl.setAttribute('border','1');
let tr= document.createElement('tr');
tbl.append(tr);

let td = document.createElement('td');
tr.append(td);

call(2020,12);
console.log(dates);
function call(yyyy,mm){
    //월초,월말
    let firstday=new Date(yyyy,mm,1)
    let lastday =new Date(yyyy,mm,0);
    console.log(firstday.getDate());
    console.log(lastday.getDate());
    for (let i=firstday;i<=lastday;i++){
        dates.push(i);
    }
}



let show =document.getElementById('show');
show.append(tbl);