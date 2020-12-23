let aa=0;

console.log(aa);

function kim(aa,bb){
result=aa+bb

return result
}

lav=kim(10,20);

document.write("lav값은: "+lav);

function ca(ab,bc,kim){
    n1=parseInt(ab);
    n2=parseInt(bc);
    result= kim(n1,n2);
    return result;
}

lav2=ca(60,20,kim);
document.write("값은: "+lav2);