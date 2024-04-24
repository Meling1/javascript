/*
var niz = [ 'a', 'b', 'c', 'd'];
prazanNiz = [];

console.log(niz);
console.log(typeof niz);

for (i =0; i < prazanNiz.length; i++) {
    console.log('1. element na poziciji [' + i + '] =' + prazanNiz[i]);
}
console.log('1.1. element na poziciji [5] =' + prazanNiz[5]);

var i = 0;
do { 
    console.log('2. element na poziciji [' + i + '] =' + prazanNiz[i]);
    i++;
}
 while (i < prazanNiz.length);

 while (i < prazanNiz.length) {
    console.log('3. element na poziciji [' + i + '] = ' + prazanNiz[i]);
 }

 var brojcaniNiz = [1, 2, 3, 4, 5, 6, 7];

 //zbroji mi sve clanove niza

// var suma = brojcaniNiz[0] + brojcaniNiz[1] + brojcaniNiz[2] + brojcaniNiz[3] + ... 

var suma = 0;

for (var x = 0; x < brojcaniNiz.length; x++ ){
    suma += brojcaniNiz[x];
}
console.log('suma = ' + suma);


/* var weirdBrNiz = [1, 2, , 4, 5, 6, 7];

var sumaW = 0;

for (var x = 0; x < wierdBrNiz.length; x++){
    if (weirdBrNiz[x] === undefined){
        continue;
    }
    sumaW += weirdBrNiz[x];
}
console.log('sumaW = '+ sumaW);

/* ili:
for (var x = 0; x < wierdBrNiz.length; x++){
    if (typeof weirdBrNiz[x] !== typeof number){
        continue;
    }
    sumaW += weirdBrNiz[x];
}
console.log('sumaW = '+ sumaW);
*/ 

/*
var matrix = [[1, 2, 3],['john', 'jane', 'mike']];

for (i = 0; i < matrix.length; i++)  {
    //console.log(matrix[i].join());

    for (var j = 0; j < matrix[i].length; j++){
       
        console.log('matrix[' + i + '][' + j + '] = ' + matrix[i][j]);
    }
}

var myNames = ['jane','john','mike'];

var y = 1;
for (var myName of myNames){
    console.log(y + '. ' + myName);
    y++;
}
*/

var names = ['John', 'Jane', 'Bob', ,'Mike'];

/*
1. Pomocu petlje napravite iteraciju kroz niz i ispisite u konzolu sve elemente niza.
2. dodajte svoje ime na kraj niza.
3. koristeci petlju, napravite iteraciju kroz ovaj niz te nakon sto ispisete 'jane' izađite iz petlje.
4. napisite naredbu za uklanjanje undefined vrijednosti iz niza.
5. soritrajte niz abecedno
6.ispisite ga.
*/

//1

//prvi se moze na dva nacina, s for i for of
/* 
for (var i= 0; i < names.length;i++){
    console.log(names.length[1]);
}
*/

for (var myName of names){
    console.log(myName);
}

//2 --> u ovom slucaju moramo znati da cemo postaviti ime na index 5
names.push('Martina');
// ili: names[5]='Martina'; --> u ovom slucaju stavljamo na najveci moguci index na definiranom nizu (names.length = 5)
//ili: names[names.length] = 'Martina'; --> koristimo funkciju

//3
for (var myName of names){
    console.log(myName);
    if (myName === 'Jane')
    break;
}
    

//4
var noviNiz = [];
for (var myName of names){
    if (myName ===undefined) {
        continue;
    }
    noviNiz.push(myName);
}
console.log(noviNiz.join());

//5
names.sort();

//6
console.log(names.join());

var brojcaniNiz = [1,2,3,4, ,5, 'test', [1,2,3], 6, 7, true];
//zbroji sve clanove niza
var suma = 0;
for (var x = 0; x < brojcaniNiz.length; x++){
    if (typeof brojcaniNiz[x] !='number'){
        console.log('element na indexu ' + x + ' nije broj pa ga preskacemo, nego je: ' + typeof brojcaniNiz[x]);
        continue;
    }
    suma += brojcaniNiz[x];
}

// primjer
var elementi = ['ime', 'prezime', 'godine'];
var ispisi = '';
for (var element of elementi){
    ispisi += element + ',';

} console.log(ispisi);
 
//ispisi najduze ime:

var namesLong= ['John', 'Jane', 'Bob', ,'Mike', 'Leonardo', 'Donatello'];
var duljina = 0;
var najDuzeIme ='';

for (var ime of namesLong){
    if (typeof ime !== 'string') continue;

    var duljinaImena = ime.length;
    if (duljinaImena > duljina){
        duljina=duljinaImena;
        najDuzeIme=ime;
    }
}
console.log('duljina: ' + duljina);
console.log('najduze ime je: ' + najDuzeIme);
