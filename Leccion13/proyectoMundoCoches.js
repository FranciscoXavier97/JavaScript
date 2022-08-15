class Coche {
    //variables estaticas 
    static contadorCoches = 0;
    static descuento = 5;

    //Constructor 
    constructor(marca,modelo,color,matricula,precio){
        this._idCoche = ++Coche.contadorCoches;
        this._marca = marca;
        this._modelo = modelo;
        this._color = color;
        this._matricula = matricula;
        this._precio  = precio;
    }

    //metodos get y set
    get idCoche(){
        return this._idCoche;
    }
    get marca(){
        return this._marca;
    }
    set marca(marca){
        this._marca = marca;
    }
    get modelo(){
        return this._modelo;
    }
    set modelo(modelo){
        this._modelo = modelo;
    }
    get color(){
       return this._color;
    }
    set color(color){
        this._color = color;
    }
    get matricula(){
        return this._matricula;
    }
    set matricula(matricula){
        this._matricula = matricula;
    }
    get precio(){
        return this._precio;
    }
    set precio(precio){
        this._precio = precio;
    }

    //Metodos para controlar el objeto
    encenderMotor(){
        console.log("El motor del coche " + this._idCoche + " se ha encendido");
    }
    arrancar(){
        console.log("El Coche " + this._idCoche + " esta en movimiento");
    }
    acelerar(){
        console.log("El Coche " + this._idCoche +  " esta tomando velocidad");
    }
    frenar(){
        console.log("El coche " + this._idCoche + " ha frenado");
    }
    detenerse(){
        console.log("El Coche " + this._idCoche + " se detuvo");
    }
    apagarMotor(){
        console.log("El Coche " + this._idCoche + " apago su motor");
    }
    //metodo para ver el precio
    verDescuento(){
        let resultado = 0;
        resultado = (Coche.descuento * this._precio) / 100;
        return resultado;
    }

    //toString
    toString(){
        return `Coche: ${this._idCoche},\nMarca: ${this._marca},\nModelo: ${this._modelo},\nColor: ${this._color},\nMatricula: ${this._matricula},\nPrecio: $${this._precio},\nDescuento: ${this.verDescuento()}`;
    }
}//CLASS - Coche

//Test de la clase Coche 
let F1 = new Coche("Ferrari","Testarossa","Rojo","F975DN",1250000);
console.log(F1.toString());
//manipular el objeto
F1.encenderMotor()
F1.arrancar();
F1.acelerar();
F1.frenar();
F1.apagarMotor();

let C1 = new Coche("Chevrolet","Blazer","Vino","BD220DN",1200000);
console.log(C1.toString());
//manipular el objeto
C1.encenderMotor();
C1.arrancar();
C1.acelerar();
C1.detenerse();
C1.apagarMotor();