let x = 5, y = 10;
/* 
    ++x tiene un pre-incremento y es aumentarlo en uno, por lo que primero aumenta de 5 pasa a 6
    y-- tienen un pos-incremento, primero utiliza el valor de y que es 10 y la siguiente vez que se utilize
    tenia pendiente un decremento 
*/
let z = ++x + y--;

console.log(x);
console.log(y);
console.log(z);

/*
    Las expresiones se analizan de izquierda a derecha, pero toman prioridad los operadores * / aunque tengamos en primer lugar la suma
    pas a segundo termino y toma la multiplicacion y divicion.
    1 multiplicacion - 2 divicion - 3 suma
*/
let resultado = 4 + 5 * 6 / 3; // (4 + ((5 * 6) / 3))
console.log(resultado);

resultado = (4 + 5) * 6 / 3;
console.log(resultado);