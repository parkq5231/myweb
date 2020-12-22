document.write("<ul><li>Apple</li><li>Banana</li></ul>");
let dan = 4;
for (let i = 1; i < 10; i++) {
    document.write('<ul style="list-style-type:circle ";><li>' + dan + '*' + i + '=<b>' +(dan * i) + '</b></li></ul>');
}