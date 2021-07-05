let readlineSync = require ("readline-sync");
let numero1 = readlineSync.questionInt("Ingrese un numero:");
let numero2 = readlineSync.questionInt("Ingrese otro numero:");

function esMultiplo (numero1, numero2){
    if (numero1%numero2 ==0){
        return true
    } else {
        return false
    }
}
console.log(esMultiplo(numero1,numero2));