let readlineSync = require("readline-sync");
let contador = 1;
let clave = readlineSync.question("Ingresar clave")
while (clave != "Eureka" && contador<3){
    clave = readlineSync.question("Ingrese nuevamente la clave:", contador++);
    if (clave == "Eureka") {
    console.log("La clave es correcta");
    } else if (contador =! 3){
        console.log("Ingrese su clave nuevamente");
    } else {
        console.log("Agotaste los intentos");
    }
}