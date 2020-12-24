function buttonCl(){
    document.write('<table border=1><tr>');
    for(i=1;i<5;i++){
        document.write('<th>'+555+'</th>');   
    }
    document.write('</tr>');
    for(i=1;i<5;i++){
        document.write('<td>'+123+' </td>');
    }
    document.write('</tr>');
    document.write('</table>');
}


let friend1={ }
friend1.name ='Hong';
friend1.age=20;
friend1.hobby='reading';

let friend2={
    name:'Hwang',
    age: 20
}

let friends=[friend1,friend2];
aab();
function aab(){
    for(friend of friends){
        for(field in friend){
            console.log(field);
        }
    }
}