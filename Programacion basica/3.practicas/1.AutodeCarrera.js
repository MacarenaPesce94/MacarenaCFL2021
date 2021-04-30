let readlineSync = require("readline-sync");
let primerVuelta = readlineSync.questionInt("Ingrese la primer vuelta");
let segundaVuelta = readlineSync.questionInt("Ingrese la segunda vuelta");
let tercerVuelta = readlineSync.questionInt("Ingrese la tercer vuelta");
let cuartaVuelta = readlineSync.questionInt("Ingrese la cuarta vuelta");
let tiempoTotal = primerVuelta+segundaVuelta+tercerVuelta+cuartaVuelta;
console.log("El tiempo total es:", tiempoTotal);
console.log("El promedio de vuelta es:", tiempoTotal/4)