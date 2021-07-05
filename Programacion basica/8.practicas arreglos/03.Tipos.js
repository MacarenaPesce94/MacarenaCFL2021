let readlineSync = require("readline-sync");
let dimensionArreglo = readlineSync.questionInt ("Ingrese la dimension del arreglo");
let v = new Array (dimensionArreglo);
let indice;
let numeroNegativo =0;
let numeroPositivo=0;
let numeroCero=0;

for (indice =0; indice < dimensionArreglo; indice++){
    v[indice] = readlineSync.questionInt("Ingrese un numero", indice);
}

for (indice =0; indice < dimensionArreglo; indice++){
    if (v[indice] > 0){
        numeroPositivo++
    } else if (v[indice] < 0){
        numeroNegativo++
    } else {
        numeroCero++
    }
}

console.log ("Hay", numeroPositivo, "numeros positivos");
console.log("Hay", numeroNegativo, "numeros negativos");
console.log("Hay", numeroCero, "numeros cero");
    