var myString = "ovo je moj \"string\"";
var mystring = 'ovo je moj "string"';

console.log(mystring);

//primjeri metoda

var string = '    lorem ipsum dolor sit amet ipsum ';
var duljina = string.length;
console.log(string);
console.log('Duljina teksta je: '+ duljina + ' znakova');
console.log('Znak na mjestu 12 je: ' + string.charAt(12));
console.log(string.trim());
console.log(string.trimEnd());

console.log(string.indexOf('ipsum'));

console.log(string.replace('ipsum', 'novi moj string'));
console.log(string.replaceAll('ipsum', 'novi moj string'));

console.log(string.toUpperCase());
console.log(string.substring(12,duljina));

var myNiz = string.split(' ');

console.log('kraj');