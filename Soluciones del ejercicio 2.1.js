/* Crea 5 variables numéricas con los nombres entero, decimal, científico, octal y hexadecimal, que tendrán los siguientes 
valores: 1357, 1357, 135e7, 01357 , 0x1357 */

let entero = 1357;
let decimal = 1357;
let científico = 135e7;
let octal = 01357;
let hexadecimal = 0x1357;

console.log("Numero entero " + entero + " es de tipo: " + typeof entero);
console.log("Numero decimal " + decimal + " es de tipo: " + typeof decimal);
console.log(
  "Numero cientifico " + científico + " es de tipo: " + typeof científico
);
console.log("Numero octal " + octal + " es de tipo: " + typeof octal);
console.log(
  "Numero hexadecimal " + hexadecimal + " es de tipo: " + typeof hexadecimal
);

let num1 = 1;
let num2 = 2;
console.log("El numero " + num1, num2 + "is the same as 3 ");
console.log(`El número ${num1} mas el ${num2} es ${num1 + num2}`);

let cadena1 = "Hola";
let cadena2 = "13";
let cadena3 = "7";
let cadena4 = "Adios";

console.log(cadena1);
console.log("Esta string quiere saludarte " + cadena1 + "\n");

console.log(
  "'Esta es una cadena con comillas simples' y comillas dobles " +
    "el " +
    cadena2 +
    " es mi numero de la suerte "
);
console.log(`El número ${cadena2} mas el ${cadena3} es ${cadena2 + cadena3}`);

console.log(
  "Esta es la primera variable " +
    cadena1 +
    " " +
    typeof cadena1 +
    "\n" +
    "Esta es la segunda variable " +
    cadena4 +
    typeof cadena2
);
console.log(cadena1 + " " + cadena2 + " " + cadena3 + " " + cadena4 + " ");

console.log(cadena2 + cadena3 + "\n"); //137

console.log(parseInt(cadena2) + parseInt(cadena3) + "\n"); // 20

const numConstante = 5; // No me deja declarar usando la misma const
console.log(numConstante);
const numConstant = 10;
console.log(numConstant);

var prueba2 = 5;
console.log(prueba2);
var prueba2 = 10;
console.log(prueba2);

let prueba1 = 9; // No me permite volver a declarar usando el mimso nombre!
let prueba2 = 10; // No me permite volver a declarar usando el mimso nombre!
console.log(prueba2);

entero = "Hola";
console.log(entero);
