let readlineSync = require ("readline-sync");
let numero1 = readlineSync.questionInt ("Ingrese un numero:");
let numero2 = readlineSync.questionInt("Ingrese otro numero");

function esMultiplo (numero1, numero2){
    return ((numero1 % numero2)==0);
}

if (esMultiplo (numero1,numero2)){
    console.log("el numero", numero1, "es multiplo de",numero2);
} else {
    console.log("el numero", numero1, "no es multiplo de", numero2);
}