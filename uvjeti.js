var text1 = 'moje ime';
var text_2 = 'moje_ime';

var x = text1 === text_2;
console.log('x= ' + x);

if (x === true){
    console.log('varijable su identične')
}
else if ('moje ime' !== 'moje ime'){ 
    console.log('varijable NISU identične')
}

//zadatak: 1. Napisite while petlju koja ce ispisivati brojeve od 3 do 20, osim onih djeljivih sa 9.

/*
var x = 2;

while ( x < 20) {
    x++;

    if (x < 3) {
        //console.log('manji od 3');
        x++; 
    continue;
    }

    /* if ( x == 9 || x == 18) {
        continue;
    } */

  /*  if (x % 9 === 0) {
        continue;
    }
    
    console.log('x= ' + x); 
*/

//2. Koja je vrijednost isprintana u konzoli?

var varOne= 0;
for (i = 0; i < 4; i++){
    console.log('iteracija ' + i + ' po varijabli i');
    for (j = 0; j < 4; j++){
        console.log('iteracija ' + j + ' po varijabli j');
        varOne++;
        console.log('vrijednost=' + varOne);
    }
}
console.log(varOne);