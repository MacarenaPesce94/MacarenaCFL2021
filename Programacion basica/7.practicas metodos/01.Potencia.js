let readlineSync = require ("readline-sync");
let base = readlineSync.questionInt("Ingrese la base:");
let exponente = readlineSync.questionInt ("Ingrese un exponente:");

function potencia(base,exponente){
    let resultado = 1;
    let i;
    for (i = 0; i< exponente; i++){
        resultado *= base;
    }
    return resultado;

}
console.log("La potencia es:", potencia (base,exponente));