// reduce
let students = [];
for (let i = 1; i <= 5; i++) {
    let std = {};
    std.sno = i;
    std.sname = 'Hong' + i;
    std.sgen = i % 2 == 0 ? 'M': 'F';
    std.score = 80 + i;
    students.push(std);
}
// console.log(students);
let result =students.map(function(a,b,c){
    return a.score ;
}).reduce(function (a,b,c,d){
    return a > b ? a : b;
});
// console.log("result: ",result);
result = students.some(function(a,b,c){
    return a.score > 80;
});
// console.log(result);
result = students.map(function (a,b,c){
    return a.sname;
}).indexOf('Hong1');
// console.log(result);
