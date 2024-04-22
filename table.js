var tableBegin = '<table><thead><tr><th>Ime</th><th>Prezime</th></tr></th></thead><tbody>';
var tableEnd = '</tbody></table>';

var rowBegin = '<tr>';
var rowEnd = '</tr>';

var rowData = '';
var row = '';

for (var i = 1; i <= 200; i++){ 
    // '<td>Ime1</td><td>Prezime1</td>';
    row += rowBegin; // <tr>
rowData = '<td>Ime' + i + '</td><td>Prezime' + i + '</td>'; // formiramo podatke
row += rowData; // formirani podaci dodani u varijablu 'row'
row += rowEnd; // </tr>
 // <tr><td>Ime1</td><td>Prezime1</td></tr>..<tr><td>Ime2</td><td>Prezime2</td></tr>... 
}



document.write(tableBegin + row + tableEnd);