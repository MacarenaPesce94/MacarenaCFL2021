let readlineSync = require("readline-sync");
let primerNumero = readlineSync.questionFloat("Ingrese el primer numero");
let segundoNumero = readlineSync.questionFloat("Ingrese el segundo numero");
let tercerNumero = readlineSync.questionFloat("Ingrese el tercer numero");
if (primerNumero > segundoNumero && primerNumero > tercerNumero) {
    console.log("El primer numero:" + primerNumero + "es el mayor");
} else {
    if (segundoNumero > primerNumero && segundoNumero > tercerNumero) {
        console.log("El segundo numero:" + segundoNumero + "es el mayor");
    } else {
        if (tercerNumero > primerNumero && tercerNumero > segundoNumero) {
            console.log("El tercer numero:" + tercerNumero + "es el mayor");
        }
    }
}
