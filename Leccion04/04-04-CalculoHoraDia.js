/*
    6am-11am - Buenos dias
    12pm-18pm - Buenas tardes
    19pm-24pm - Buenos noches
    0am-6am - Durmiendo
*/

let mensaje;
let hora = 15;

if(hora >= 6 && hora <= 11){
    mensaje = "Buenos dias";
}
else if(hora >= 12 && hora <= 18){
    mensaje = "Buenas tardes";
}
else if(hora >= 19 && hora <= 24){
    mensaje = "Buenas noches";
}
else if(hora >= 0 && hora < 6){
    mensaje = "Durmiendo";
}
else{
    mensaje = "Valor incorrecto;"
}

console.log(mensaje);