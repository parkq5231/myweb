//number.js

// 2000년 이전, 이후 구분->1,3이면 남자
// 2000년 이전, 이후 구분->2,4이면 여자

let numbers = '990101-1234567';
numbers += ' 990102-2345678',
numbers += ' 000201-3456789',
numbers += ' 000202-4567890';
numbers += ' 0003014567890';

let numAry = numbers.split(' ');
for (num of numAry){
    result=getGender(num);
    console.log('결과: '+result);
}
function getGender(num) {
    let fNum=num.substr(7,1);
    let fYear=num.substr(0,2);
        if (fNum=='1'){
            return '남자';
        }else if(fNum=='2'){
            return '여자';
        }else if(fNum=='3'){
            return '남자';
        }else if(fNum=='4'){
            return '여자';
        }else {
            return '잘못입력';
        }
}//end of function