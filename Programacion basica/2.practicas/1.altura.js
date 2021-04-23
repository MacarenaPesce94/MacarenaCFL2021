let readlineSync = require("readline-sync");
let alturaPersona = readlineSync.question("Cual es su altura ? ");
let pesoPersona = readlineSync.question("Cual es su peso ? ");
let IMCpersona = pesoPersona / (alturaPersona * alturaPersona);
console.log("su IMC es", IMCpersona);