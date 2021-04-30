let readlineSync = require("readline-sync");
let precioUnitario;
let descuento;
let montoConDescuento;
let cantidad;
let precioTotal;
let indicarMes;
precioUnitario = readlineSync.questionFloat("Ingresar precio Unitario");
cantidad = readlineSync.questionFloat("Ingresar cantidad");
precioTotal = precioUnitario * cantidad;
indicarMes = readlineSync.question("Indicar el mes:");
if (indicarMes == "Octubre") {
    descuento = (precioTotal*15)/100;
    montoConDescuento = precioTotal - descuento;
    console.log("Por comprar en el mes de Octubre, obtenes un descuento del 15% en tu compra");
    console.log("El monto a pagar es de:", montoConDescuento);
} else {
    console.log("No tenes descuentos, el monto a pagar es:", precioTotal);
}
