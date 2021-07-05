let readlineSync = require ("readline-sync");
let ingresarNumero = readlineSync.questionFloat("Ingrese un numero:");
let cantPositivos = 0;
//let porcentaje = total*100/cantPositivos;
let porcentaje;
let total = 0;
while (ingresarNumero !==0){
    if (ingresarNumero > 0){
        cantPositivos++
    } 
    total++
    ingresarNumero = readlineSync.questionFloat("Ingrese un numero:");
}
if (total>0){
    porcentaje = cantPositivos*100/total;
    console.log(cantPositivos, "positivos",porcentaje, "porcentaje positivos:");
}