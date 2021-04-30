let readlineSync = require("readline-sync");
let precioProducto = readlineSync.questionInt("Ingrese el precio del Producto");
let porcentajeDescuento = readlineSync.questionInt("Ingrese porcentaje de Descuento");
let precioFinal = precioProducto*(100-porcentajeDescuento)/100;
console.log("el precio final es", precioFinal);