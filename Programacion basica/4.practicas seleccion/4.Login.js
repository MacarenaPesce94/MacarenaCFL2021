let readlineSync = require("readline-sync");
let usuario = "Juan";
let contraseña = "claveJuan";
let userIngresado = readlineSync.question("Ingrese el nombre de usuario:");
let contraseñaIngresada = readlineSync.question("Ingrese la contraseña:");
if (usuario == userIngresado && contraseña == contraseñaIngresada){
    console.log("Bienvenido");
} else {
    console.log("El usuario o contraseña son incorrectos, vuelva a intentar");
}