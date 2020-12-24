//function3.js
let friends=[];
let i=0;

function input_friend(){
    let namef = document.getElementById('name').value;
    let agef= document.getElementById('age').value;
    let hobbyf=document.getElementById('hobby').value;

    
    let friend={};
    friend.name=namef;
    friend.age=agef;
    friend.hobby=hobbyf;

    friends[i++]=friend;

    let info=document.getElementById('friends');
    let trTag=document.createElement('tr');
    let tdTag=document.createElement('td');
    let tdTag1=document.createElement('td');
    let tdTag2=document.createElement('td');

    tdTag.innerHTML=namef;
    tdTag1.innerHTML=agef;
    tdTag2.innerHTML=hobbyf;

    info.append(trTag)
    trTag.append(tdTag)
    trTag.append(tdTag1);
    trTag.append(tdTag2);
    
    for (friend of friends){
        for(field in friend){
            console.log(friend[field]);
        }
    }

    // console.log(namef.value, agef.value, hobbyf.value);
    // document.getElementById('show').innerHTML=namef.value+','+ agef.value+','+ hobbyf.value+','+kimbab.value;
    // document.getElementById('result').value=namef.value+','+ agef.value+','+ hobbyf.value+','+kimbab.value;
}
