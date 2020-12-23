//function2.js
// function nameFunc(){
//      let name1=window.prompt("이름을 입력하세요.");
// // let name1 = document.getElementById('name').value;
//     console.log('입력한 이름은: '+name1);
// }
// nameFunc(); 

//5개의 숫자를 입력 후 ==5개중 최대값 출력
let numAry=[];
for (i=0;i<5;i++){
    let name1=window.prompt('숫자를입력.');
    numAry[i]=parseInt(name1);
}
findMax();

function findMax(){
    numAry[];
}

let name1=window.prompt("숫자를 입력하세요.");
let name2=window.prompt("숫자를 입력하세요.");
// checkGrade(name1);//100:A,90이상:B,80이상:C,그외:D
function checkGrade(aac){
    let n1=parseInt(aac);
    if(n1 ==100){
        document.write('등급은 A입니다.');
    }else if(n1>=90){
        document.write('등급은 B입니다.');
    }else if(n1>=80){
        document.write('등급은 C입니다.');
    }else{
        document.write('등급은 D입니다.');
    }
}
diffSum(name1,name2);//입력받은 두 수 사이의 합: 1~5 1,2,3,4 나오도록
function diffSum(name1,name2){
    let n1=parseInt(name1);
    let n2=parseInt(name2);
    let num;
        for(i=0;i<(n2-n1); i++){
            sum=n1+i;
            i+
            console.log(sum)
            num+=sum;
        }
        document.write("두수 사이의 합:"+num);
}

// sum(name1,name2);
// function sum(a,b){
//     let n1=parseInt(a);//'30'과 같은 것들을 숫자로 바꿔줌
//     let n2=parseInt(b);
//     console.log(n1+n2);
// }

