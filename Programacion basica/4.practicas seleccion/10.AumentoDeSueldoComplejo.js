let readlineSync = require("readline-Sync");
let sueldoActual = readlineSync.questionFloat("Ingresar sueldo actual");
let nuevoSueldo;
let sueldoConIncremento;
let incremento;
if (0< sueldoActual && sueldoActual <= 15000){
    incremento = (sueldoActual*20)/100;
    sueldoConIncremento = sueldoActual + incremento;
    nuevoSueldo = sueldoActual*1.2;
    console.log("Su aumento es del 20%");
    console.log("Su sueldo a cobrar es de:" + sueldoConIncremento);
} else if (15001 <= sueldoActual && sueldoActual <= 20000){
    incremento = (sueldoActual*10)/100;
    sueldoConIncremento = sueldoActual + incremento;
    nuevoSueldo = sueldoActual*1.1;
    console.log("Su aumento es del 10%");
    console.log("Su sueldo a cobrar es de:" + sueldoConIncremento);
} else if (20001 <= sueldoActual && sueldoActual <= 25000) {
    incremento = (sueldoActual*5)/100;
    sueldoConIncremento = sueldoActual + incremento;
    nuevoSueldo = sueldoActual*1.05;
    console.log("Su aumento es del 5%");
    console.log("Su sueldo con aumento es de:" + sueldoConIncremento);
} else {
    nuevoSueldo = sueldoActual
    console.log("Usted no recibe aumento");
}