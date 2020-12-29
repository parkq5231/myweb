function page166(){
    let h2 = document.createElement('h2');
    h2.innerHTML='입력 양식 데이터 전송 버튼';

    let form = document.createElement('form');
    form.setAttribute('action','page.jsp');
    form.setAttribute('method','get');

    let name=document.createElement('p')
    name.innerHTML='이름 : ';
    let input = document.createElement('input');
    input.setAttribute('type','text');
    input.setAttribute('name','name');
    input.setAttribute('value','홍길동');

    form.append(name);
    name.append(input);

    let col=document.createElement('p');
    col.innerHTML='학과 : ';
    let input2 = document.createElement('input');
    input2.setAttribute('type','text');
    input2.setAttribute('name','major');
    input2.setAttribute('value','전자과');

    form.append(col);
    col.append(input2);

    let input3 = document.createElement('input');
    input3.setAttribute('type','submit');
    input3.setAttribute('value','전송');

    form.append(input3);


    let show3=document.getElementById('show3');
    show3.append(h2);
    show3.append(form);
}