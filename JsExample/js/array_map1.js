// array_map1.js
let students = [];
//학번 학생이름 학생점수
let student = {
    sno: 1,
    name: 'Hong',
    sgen: 'F',
    score: 80
}
for (let i = 1; i <= 5; i++) {
    let std = {};
    std.sno=i;
    std.sname='Hong'+i;
    std.sgen= i % 2 == 0 ? 'M': 'F';
    std.score=80+i;
    students.push(std);
}
console.log(students);
//여자의 점수만 가져오기 filter는 성별 map은 점수만
let aaa=students.filter(function (a,b,c){
    return a.sgen=='F';
}).map(function (a,b,c){
    return a.score;
});
console.log(aaa);

let newStd = students.map((a,b,c) => {
    return a.sname;
})
console.log(newStd);
















