let readlineSync = require ("readline-sync");
let ingresarNumero, numeroMaximo;
ingresarNumero = readlineSync.questionFloat("Ingrese un numero:");
numeroMaximo = 1;
while (ingresarNumero!=0){
    if (ingresarNumero > numeroMaximo){
        numeroMaximo = ingresarNumero;
    } ingresarNumero = readlineSync.questionFloat("Ingrese un numero:");
}
console.log("El numero maximo es:", numeroMaximo)