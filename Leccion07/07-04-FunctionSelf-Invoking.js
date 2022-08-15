//funciones se mandan llamar asi mismas, esto se conoce como Self-invoking

(function (){
    console.log("Ejecutando la funcion");
})();

/*
    El detalle de esta funcion es que mo se puede reutlizar, no podemos mandar llamar esta funcion
    ya que no la estan asigando a una variable, ni tampoco le estamos asignando un nombre 
*/

//funcion con argumentos
(function (a,b){
    console.log("Ejecutando la funcion: " + (a * b));
})(5,5);