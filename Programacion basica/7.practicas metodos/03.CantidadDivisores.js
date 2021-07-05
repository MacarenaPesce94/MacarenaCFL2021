let readlineSync = require ("readline-sync");
let numero = readlineSync.questionInt("Ingrese un numero:");
let numDivisores = cantidadDeDivisores (numero);
console.log("El numero", numero, "tiene", numDivisores, "divisores");


function cantidadDeDivisores (numero){
    let cantidad = 0;
    let divisor;
    for (divisor = 0; divisor < numero; divisor++){
        if (esMultiplo(numero,divisor)){
            cantidad++;
        }
    }
    return cantidad;
};