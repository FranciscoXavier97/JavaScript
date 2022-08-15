"use strict" //modo esticto

try{
    let x = 10;
    //mifuncion();
    throw "Mi error";
}
catch(error){
    console.log(error);
}
finally{
    console.log("Termina la revicion de errores");
}

console.log("continuamos...");