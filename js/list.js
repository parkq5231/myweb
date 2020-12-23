function myFunc() {
    document.write("<ul><li>Apple</li><li>Banana</li></ul>");
    let dan = 4;
    document.write('<ul>');
    for (let i = 1; i <= 10; i++) {
        if (i % 2 == 1) {
            document.write('<li class="even">' + dan + '*' + i + '=<b>' + (
                dan * i
            ) + '</b></li>');
        } else {
            document.write('<li class="odd">' + dan + '*' + i + '=<b>' + (
                dan * i
            ) + '</b></li>');
        }
    }
    document.write('</ul>');
}
function myFunc2() {
    let dan = 4;
    document.write("<style>tr { background-color=yellow;text-align: center ; font-size:x-large; }</style>")
    document.write('<table border=1; width=200px>');
        for (let i=1; i<=10; i++){
                document.write('<tr><td>' +dan + ' * '+ i + '</td><td>=</td><td>' + (dan * i) + '</td></tr>');
            }
                document.write('</table>');
        }