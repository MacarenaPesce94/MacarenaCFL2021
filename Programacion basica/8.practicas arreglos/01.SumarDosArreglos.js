let readlineSync = require ("readline-sync");
let v1 = new Array (6);
let v2 = new Array (6);
let vSuma = new Array (1);
let indice;
let resultado =0;

for (indice =0; indice < 6; indice++){
    v1[indice] = readlineSync.questionInt("Ingrese un numero entero:");
}

for (indice=0; indice< 6; indice++){
    v2[indice] = readlineSync.questionInt("Ingrese otro numero entero:");
}

for (indice =0; indice< 6; indice++){
    vSuma[indice] = v1[indice] + v2[indice];
    resultado += vSuma[indice];
}

for (indice =0; indice < 6; indice++){
    console.log("El numero en la posicion", indice, "es", v1[indice]);
}
for (indice =0; indice < 6; indice++){
    console.log("El numero en la posicion", indice, "es", v2[indice]);
}
for (indice =0; indice <1 ; indice++){
    console.log("El resultado es", resultado);
}