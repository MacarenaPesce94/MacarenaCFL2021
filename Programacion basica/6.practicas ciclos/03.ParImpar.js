let readlineSync = require("readline-sync");
let ingresarNumero = readlineSync.questionInt("Ingresar un numero:");
while (ingresarNumero <= 0){
    let ingresarNumero = readlineSync.questionInt("Ingresar otro numero mayor a cero");
} if (ingresarNumero % 2 == 0) {
    console.log("El numero ingresado es par");
} else {
    console.log("El numero ingresado es impar");
}
