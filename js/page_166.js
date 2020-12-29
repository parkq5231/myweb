//drawtable만들어서 누르는 순간 166p모양처럼 나오게
function drawTable(){
    let h2=document.createElement('h2');
    h2.innerHTML='입력 양식 데이터 전송 버튼';

    let form=document.createElement('form');
    form.setAttribute('action','page.jsp');
    form.setAttribute('method','get');

    let titles=['이름: ','학과: '];
    
    for (title of titles){
    let a = document.createElement('p');
    a.innerHTML=title;
    form.append(a);
    let input = document.createElement('input');
    input.setAttribute('type','text');
    input.setAttribute('name','name');
    a.append(input);
    
}
    
    
    let input2 = document.createElement('input');
    input2.setAttribute('type','text');
    input2.setAttribute('name','major');
    
    
    let c = document.createElement('input');
    c.setAttribute('type','submit');
    c.setAttribute('value','전송');
    form.append(c);
    
    let show=document.getElementById('show');
    show.append(h2);
    show.append(form);
}