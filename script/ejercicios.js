/* EJERCICIOS  */
/* let angulo1 = 90;
let angulo2 = 90;
let angulo3 = 90;

if (angulo1 + angulo2 + angulo3 == 180) {
    console.log("triangulo")
}
else if (angulo1 == 90 || angulo2 == 90 || angulo3 == 90) {
    console.log("triangulo rectangulo");
}

else if (angulo1 > 90 || angulo2 > 90 || angulo3 > 90) {
    console.log("triangulo obtusangulo");
}
else (angulo1 < 90 || angulo2 < 90 || angulo3 < 90); {
    console.log("triangulo acutangulo");
} */

/* ejercicio 2 */
/* let nota = prompt("Ingresa tu nota");

if (nota >= 0 && nota <= 59) {
    console.log("Suspenso")
}
else if (nota >= 60 && nota <= 79) {
    console.log("Aprobado");
}
else if (nota >= 80 && nota <= 89) {
    console.log("Notable");
}
else if (nota >= 90 && nota <= 100) {
    console.log("Sobresaliente");
}
else (nota != Number); {
    console.log("Formato de nota incorrecto");
} */

/* ejercicio 3 */

/* let languaje = prompt("Hello world");

if (languaje == "es") {
    console.log("Hola mundo!");
}
else if (languaje == "fr") {
    console.log("Bonjour tout le monde!");
}
else if (languaje == "en") {
    console.log("Hello World!");
}
else if (languaje == "de") {
    console.log("Hallo Welt!");
}
else {
    console.log("Sorry, language not available");
}
 */
/* ejercicio 4 */

/* let nationality = prompt("nationality");
let age = prompt("age");
if (nationality != "es" || age < 18) {
    console.log("no puede votar");
}
else {
    console.log("puede votar");
}
 */
/* ejercicio 5 */

/* let texto = prompt("texto");
texto = "";
if (texto == Number) {
    console.log("Input inválido: sólo se aceptan strings");
}
else if (texto == "mesa") {
    console.log("mesas");
}
else if (texto == "camión") {
    console.log("camiones");
}
else if (texto == "crisis" || "tesis" || "bíceps") {
    console.log("Esta palabra ya está en plural");
}
else if (texto === "crisis" || "tesis" || "tórax") {
    console.log("El plural coincide con el singular");
}
else if (texto === "sed" || "salud" || "caos") {
    console.log("Esta palabra no tiene forma plural");
}
else {
    console.log("");
}
 */
/* ejercicio 6  */

/* let frase = prompt("texto");
let frase1 = "";
let frase2 = "";
let resultado = "";
console.log(resultado == frase1.concat(frase2));
 */

/*  ejercicio 7 */

/* let palabra = prompt("");
let reves = "pámpano";
function reversereves(str) {
    let arrstr = str.split("");
    return arrstr.reverse().join("");
}
console.log(reversereves(reves)); */
/*  ejercicio */

/* function palindromo(cadena) {

    let array = cadena.split("");
    let reverse = array.reverse();
    return cadena == array.join("") ? "si es palíndromo" : "No es palíndromo";
}
console.log(palindromo("asa"));
console.log(palindromo("osa"))
console.log(palindromo("ojo")) */

/* 
 ejercicio 9*/

/* let str = "Capitalize";
let nuevo = str.replaceAll("Capitalize", "capitalizE")
{
    console.log(nuevo)
}
 */
/*  ejercicio 10 */

/* let correo = prompt("ingresa tu correo")

if (correo == "fakemail@gmail.com") {
    console.log(correo.slice(9));
}
else if (correo == "teacher@gammatech.school") {
    console.log(correo.slice(8, 24));
}
else {
    console.log("Direccion de correo  incorrecto");
} */


/* ejercicio 11*/

/* ejercicio 12*/

/* ejercicio 13 */
/* let galletas = 25;
function buclefor(num) {
    for (let i = 1; i < (galletas % 3) + (1 * 2); i--);
    console.log(i);
} */

/* ejercicio 13
  */
for (let i = 0; i < 100; i += 3) {
    console.log(i)
}

/* ejercicio 14*/
   /*  for (i=0;i<4;i++){ 
        console.log("Índice del bucle externo:" + i )
        for (j=0;j<5;j++) 
        console.log("Bucle interno:" + j)    
    }  */

/* ejercicio 15 */

   /*  for (i=0;i<5;i++){ 
        for (j=0;j<10;j++) 
        console.log(  i +  " : " + j) } */