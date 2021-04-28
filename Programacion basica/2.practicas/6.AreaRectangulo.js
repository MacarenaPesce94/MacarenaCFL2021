let readlineSync = require("readline-sync");
let base = readlineSync.questionInt("Ingrese la base:");
let altura = readlineSync.questionInt("Ingrese la altura:");
console.log("El area del rectangulo es:", base * altura);