//drawtable만들어서 누르는 순간 166p모양처럼 나오게
function drawTable(){
    let h2=document.createElement('h2');
    h2.innerHTML='입력 양식 데이터 전송 버튼';

    let form=document.createElement('form');
    form.setAttribute('action','page.jsp','method','get');

    let a = document.createElement('p');
    a.innerHTML='이름: ';
    let b = document.createElement('p');
    b.innerHTML='학과: ';
    
    let input = document.createElement('input');
    input.setAttribute('type','text','name','name');

    let input2 = document.createElement('input');
    input2.setAttribute('type','text','name','major');
    
    document.write('<p></p>');
    
    a.append(input);
    form.append(a);
    





    let show=document.getElementById('show');
    show.append(h2);
    show.append(form);
}