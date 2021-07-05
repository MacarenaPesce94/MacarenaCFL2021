let readlineSync=require ("readline-sync");
let primerNumero = readlineSync.questionInt("Ingrese el primer numero:");
let segundoNumero = readlineSync.questionInt("Ingrese el segundo numero:");
let suma, resultado, auxiliar;
resultado = auxiliar;
if (primerNumero>segundoNumero){
    auxiliar = primerNumero;                // ¿Por qué?
    primerNumero = segundoNumero;
    segundoNumero = auxiliar;
}
