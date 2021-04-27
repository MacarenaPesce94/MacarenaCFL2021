let readlineSync = require("readline-sync");
let datoUno = readlineSync.questionInt("Ingrese el dato uno:");
let datoDos = readlineSync.questionInt("Ingrese el dato dos:");
console.log("El area del rectangulo es:", datoUno * datoDos);