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