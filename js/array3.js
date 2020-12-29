//console에 하나씩 추가되어 보여지도록
let aa =[];
function sum(){
    let num1=document.getElementById('num1').value;
    aa.push(num1);
    console.log(aa);
}
//뒤에서부터 1개씩 삭제
function minus(){
    aa.pop();
    console.log(aa);
}