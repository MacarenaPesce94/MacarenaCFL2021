let readlineSync = require("readline-sync");
let numeroDeseado = readlineSync.questionInt("Escribir el numero que desea verificar si es mayor o no a 20:");
if (numeroDeseado > 20){
    console.log("El numero es mayor a 20:" + numeroDeseado);
} else {
    console.log("El numero deseado es menor o igua a 20:" + numeroDeseado);
}