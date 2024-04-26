function ispisi(unos){
    console.log('DEBUG: --->' + unos);
}

ispisi('nesto ispisi na konzolu');

/* 1. napisite javascript funkciju koja prihvaca zadani niz kao parametar i pronalazi najduzu rijec unutar niza.
2. vratite tu rijec iz funkcije i spremite u varijablu.
3. ispisite varijablu u konzoli.
*/

var myNiz = ['ime', 'prezime', 'godine', 'broj cipela', 'itd'];

function pronadjiNajduzuRijec(niz){
    var najduzaRijec ='';

var duljina = 0;
for (var ime1 of niz){
    if (ime1.length > duljina){
        duljina = ime1.length;
        najduzaRijec = ime1;
    }
}

    return najduzaRijec;
}
//2
var najduzaRijec = pronadjiNajduzuRijec(myNiz);
//3
console.log(najduzaRijec);

//ZADATAK ZA TEST:

function getMax(a,b){
    let retVal = 0;

    if (typeof a !== 'number' || typeof b !== 'number'){
        return 'nisu svi parametri brojevi';
    }

    if (a>b){
        retVal=a;}

        else if (b>a) {
            retVal = b;

        } else if (a === b){
            retVal=a; //vrati prvi, odnosno 'a'

        } else {
            retVal='kruske i jabuke nisu isto';
        }
        
        return retVal;
    }
    
    console.log('veci broj je: ' + getMax('a', -25));   
    
    /* drugi nacin
    
    function getMax(a,b){

        if (typeof a !== 'number' || typeof b !== 'number'){
        return 'nisu svi parametri brojevi';
    }

    if (a === b){
        return a; //vrati prvi, odnosno 'a'
    }
    if (a > b){
        return a;
    }
    return b;
    }


getMax(1,2);

*/

// Napisite funkciju koja zbraja 2 broja

function zbroj(a, b){
    if (typeof a !=='number' || typeof b !== 'number'){
        return 'error';
    }
    return a+b;
}
console.log(zbroj('2',3))

var prvi = zbroj('3',3);
var drugi = zbroj('5',5);
if (prvi !=='error' && drugi !== 'error'){
    var dvaPutaSuma = prvi * drugi;
    console.log(dvaPutaSuma);
} else {
    console.log('ne mogu ti izracunati');
}

//Mnozenje

function pomnozi(a,b){
    return a * b;
}

var nekaVarijabla = pomnozi(2,3) * pomnozi(8,9) + pomnozi(2,2);

console.log(nekaVarijabla);


function podijeli(a,b){
if(b===0){
    console.log('dijeljenje s nulom nije deifinirano');
    return 'error';
}
return a / b;
}

var dijeljeni = podijeli(12,0);
console.log('rezultat dijeljenja: ' + dijeljeni);

//Nađi najveci  i najmanji br TEST
