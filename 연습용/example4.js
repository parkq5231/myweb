let infoa=[];
let i=0;
function info(){
    let name2=document.getElementById('name');
    let age2=document.getElementById('age');
    let local2=document.getElementById('local');

    let information={};
    information.name=name2.value;
    information.age=age2.value;
    information.local=local2.value;

    console.log(information);
    infoa[i++]=information;

    for (information of infoa){
        for(field in information){
            console.log(information[field]);

        }
    }
}