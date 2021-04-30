let readlineSync = require("readline-sync");
let sueldoActual = readlineSync.questionFloat("Ingresar sueldo actual");
let nuevoSueldo;
if (0< sueldoActual && sueldoActual <= 15000){
    nuevoSueldo = sueldoActual*1.2;
    console.log("Su aumento es del 20%");
} else if (15001 <= sueldoActual && sueldoActual <= 20000){
    nuevoSueldo = sueldoActual*1.1;
    console.log("Su aumento es del 10%");
} else if (20001 <= sueldoActual && sueldoActual <= 25000){
    nuevoSueldo = sueldoActual*1.05;
    console.log("Su aumento es del 5%");
} else {
    nuevoSueldo = sueldoActual
    console.log("No obtiene aumento");
}