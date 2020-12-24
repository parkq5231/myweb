//function3.js
let friends=[];

function input_friend(){
    let namef = document.getElementById('name').value;
    let agef= document.getElementById('age').value;
    let hobbyf=document.getElementById('hobby').value;

    let i=0;
    let friend={};
    friend.name=namef;
    friend.age=agef;
    friend.hobby=hobbyf;

    friends[i++]=friend;

    let info=document.getElementById('friends');
    let trTag=document.createElement('tr');
    let tdTag=document.createElement('td');
    
    info.append(trTag)
    trTag.append(tdTag)

    for (friend of friends){
        for(field in friend){
            console.log(friend[field]);
        }
    }
    // console.log(namef.value, agef.value, hobbyf.value);
    // document.getElementById('show').innerHTML=namef.value+','+ agef.value+','+ hobbyf.value+','+kimbab.value;
    // document.getElementById('result').value=namef.value+','+ agef.value+','+ hobbyf.value+','+kimbab.value;
}
