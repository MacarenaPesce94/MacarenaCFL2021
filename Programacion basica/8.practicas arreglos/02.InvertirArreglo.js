let readlineSync = require("readline-sync");
let dimensionDeseada = readlineSync.questionInt("Ingrese la dimension deseada");
let v = new Array (dimensionDeseada);
let indice;

for (indice =0 ; indice< dimensionDeseada; indice++){
    v[indice] = readlineSync.questionInt("Ingrese un numero", indice);
}

for (indice = dimensionDeseada-1; indice >=0; indice --){
    console.log (v[indice]);
}