let readlineSync = require ("readline-sync");
let ingresarNumero = readlineSync.questionFloat("Ingresar un numero:");
if (ingresarNumero == 0){
    console.log("El" + ingresarNumero + "no es par ni impar");
} else if (ingresarNumero % 2 == 0) {
    console.log("El" + ingresarNumero + "es par");
} else {
    console.log("El" + ingresarNumero + "es impar");
}