const autos = ["Camaro","Corvette","Blazer"];

//Modificar un elemento del arreglo
autos[1] = "Volt";
console.log(autos);

//Agregar un elemento  al arreglo
autos.push("Equinox");
console.log(autos);

//tamaño del arreglo
console.log(autos.length);

//array.length  = agregar un elemento despues del ultimo indice
autos[autos.length] = "Escalade";
console.log(autos);

/*
                                                Dejando lugares vacios en el arreglo.
    El indice 5 queda con un valor vacio, no tiene nigun valor asignado hasta el momento ya que  nunca lo indicamos.
    Dejar lugares vacios no es recomendable, solamente que asi lo desemos programar pero lo recomendable es tener todas las 
    posiciosnes llenas en nuetro arreglo 
*/
autos[6] = "Sierra";
console.log(autos);

//preguntar si es un arreglo
console.log(typeof autos);

console.log(Array.isArray(autos));

console.log(autos instanceof Array);
