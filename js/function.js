//function.js
function sum(num1, num2) {
    let result = num1+num2;
    console.log(result);
    return result;
}

let result =sum('10','20');
document.write('<h1>'+result+'</h1>');


let myfunc=function(a, b){
    let result=a*b;
    console.log('반갑습니다.');
    return result;
}

result = myfunc(4,6);

let yourfunc=myfunc;
result=yourfunc(5,7);

console.log(result);

let theotherfunc=function(n1,n2){
    return n1/n2;
}

function otherfunc(a,b,funcdef){
    let result = funcdef(a,b);
    console.log('result: '+result);
}
otherfunc(60,30,theotherfunc);


// console.log(myfunc());