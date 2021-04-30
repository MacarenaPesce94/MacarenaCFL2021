let readlineSync = require("readline-sync");
let posicionLlegada = readlineSync.questionInt("Ingresar posicion de llegada del competidor:");
if (posicionLlegada == 1){
    console.log("Entregar medalla de oro");
} else {
    if (posicionLlegada == 2) {
        console.log("Entregar medalla de plata");
    } else {
        if (posicionLlegada == 3) {
            console.log("Entregar medalla de bronce");
        } else {
            console.log("Entregar mencion de participacion");
        }
    }
}