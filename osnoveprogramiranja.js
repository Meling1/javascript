// 1. Kreirajte varijable firstName i lastName i spojite ih u varijablu fullName, ali s razmakom (" ") između imena i prezimena.

var firstName = 'Ivan ';
var lastName = ' Horvat';

var fullName = firstName.trim() + ' ' + lastName.trim();
console.log(fullName);

// 2. Razlomite ovu ternarnu operaciju na 3 razlicite operacije!

var z = 2;
var y = 0;

var x = z === 2 ? y : 5;

if (z === 2){
    x = y;
}
else {
    x = 5;
}
console.log('x= ' + x);

/* Napisite petlju koja ce prolaziti kroz brojeve od 1 do 20. 
za svaku ce iteraciju provjeriti je li trenutni broj paran ili neparan, i console.log-ati rezultat (npr. "broj 2 je paran"). */

for( x= 1; x < 20; x++) {
    if (x % 2 == 0 ) {
    console.log('Broj ' + x + ' je paran');
    }
}

