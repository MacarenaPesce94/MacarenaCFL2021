let readlineSync = require("readline-sync");
let numero1 = readlineSync.questionInt("Ingrese un numero:");
let hastaNumero = readlineSync.questionInt("Ingrese hasta que numero:");
let contador;
let multiplicacion = 1;
for (contador = numero1; contador <= hastaNumero; contador++){
    multiplicacion = numero1 * contador
    console.log(numero1, "x",contador, "=", multiplicacion);
}