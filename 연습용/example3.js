let friends=[];

for (i=0;i<3;i++){
let named=window.prompt("이름을 입력하세요.");
let age=window.prompt("나이를 입력하세요.");
let friend={};
friend.name=named;
friend.age=age;
friends[i]=friend;
}

document.write('<table border=1>');
for (friend of friends){
    document.write('<tr>');
    for(field in friend){
        document.write('<td>'+friend[field]+'</td>');
    }
    document.write('</tr>');
}
document.write('</table>');




