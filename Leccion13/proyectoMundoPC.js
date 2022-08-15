class DispositivoEntrada{
    //constructor
    constructor(tipoEntrada,marca){
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }

    //metodos get y set 
    get tipoEntrada(){
        return this._tipoEntrada;
    }
    set tipoEntrada(tipoEntrada){
        this._tipoEntrada = tipoEntrada;
    }
    get marca(){
        return this._marca;
    }
    set marca(marca){
        this._marca = marca
    }
}//CLASS - DispositivoEntrada

class Raton extends DispositivoEntrada{
    //variable estatica
    static contadorRatones = 0

    //constructor
    constructor(tipoEntrada,marca){
        super(tipoEntrada,marca);
        this._idRaton = ++Raton.contadorRatones;
    }

    //metodos get y set 
    get idRaton(){
        return this._idRaton; //atributo solo lectura
    }

    //metodo toString-Teplate String
    toString(){
        return `Raton: {idRaton: ${this._idRaton}, tipoEntrada: ${this._tipoEntrada}, marca: ${this._marca}}`;
    }
}//CLASS - Raton

//Test de la clase raton
let R1 = new Raton("USB","Logitech");
console.log(R1.toString());
let R2 = new Raton("Bluetooth","Dell");
console.log(R2.toString());

class Teclado extends DispositivoEntrada{
    //variale estatica
    static contadorTeclados = 0;

    //constructor
    constructor(tipoEntrada,marca){
        super(tipoEntrada,marca);
        this._idTeclado = ++Teclado.contadorTeclados;
    }

    //metodos get y set 
    get idTeclado(){
        return this._idTeclado;
    }

    //metodo toString - Template string
    toString(){
        return `Teclado: {idTeclado: ${this._idTeclado}, tipoEntrada: ${this._tipoEntrada}, marca: ${this._marca}}`;
    }
}//CLASS - Teclado

//Test de la clase teclado 
let T1 = new Teclado("USB","Dell");
console.log(T1.toString());
let T2 = new Teclado("PS/2","HP");
console.log(T2.toString());

class Monitor {
    //variable estatica
    static contadorMonitor = 0;

    //Constructor
    constructor(marca,tamaño){
        this._marca = marca;
        this._tamaño = tamaño;
        this._idMonitor = ++Monitor.contadorMonitor;
    }

    //Metodos get y set 
    get marca(){
        return this._marca;
    }
    set marca(marca){
        this._marca = marca;
    }
    get tamaño(){
        return this._tamaño;
    }
    set tamaño(tamaño){
        this._tamaño = tamaño;
    }
    get idMonitor(){
        return this._idMonitor;
    }

    //metodo toString - Template String
    
    toString(){
        return `Monitor: {idMonitor: ${this.idMonitor}, marca: ${this._marca}, tamaño: ${this._tamaño}}`;
    }
}//CLASS - Monitor

//Test de la clase Monitor
let M1 = new Monitor("Samsung",15);
console.log(M1.toString());
let M2 = new Monitor("HP",27);
console.log(M2.toString());

class Computadora{
    //variable estatica
    static contadorComputadora  = 0;

    //constructor
    constructor(nombre,monitor,raton,teclado){
        this._idcomputadora = ++Computadora.contadorComputadora;
        this._nombre = nombre;
        this._monitor = monitor;
        this._raton = raton;
        this._teclado = teclado;
    }

    //metodos get y set 
    get idcomputadora(){
        return this.idcomputadora;
    }
    get nombre(){
        return this.nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get monitor(){
        return this.monitor;
    }
    set monitor(monitor){
        this._monitor = monitor;
    }
    get raton(){
        return this._raton;
    }
    set raton(raton){
        this._raton = raton;
    }
    get teclado(){
        return this._teclado;
    }
    set teclado(teclado){
         this._teclado = teclado;
    }

    //metodo toString - Template String 
    toString(){
        return `Computadora: ${this._idcomputadora}  ${this._nombre} \n ${this._monitor} \n ${this._raton} \n ${this._teclado} \n`;
    }
}//CLASS - Computadora

//Test de la clase de Computadora
let C1 = new Computadora("HP",M1,R1,T1); //le pasamos las referencias de los objetos anteriormente
console.log(C1.toString());
//console.log(`${C1}`); mandar llamar  el metodo toString de una forma automatica
let C2 = new Computadora("Armada",M2,R2,T2);
console.log(`${C2}`);

class Orden{
    //variables estaticas
    static contadorOrdenes = 0

    static get MAX_COMPUTADORAS(){
        return 5;
    }

    //Constructor
    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._computadoras = []; //arreglo vacio
    }

    //metodo get
    get idOrden(){
        return this.idOrden ;
    }

    //metodo agregar computadora
    agregarComputadora(computadora){
        if(this._computadoras.length < Orden.MAX_COMPUTADORAS){
            this._computadoras.push(computadora);
        }
        else{
            console.log("No se pueden agregar mas productos");
        }
    }

    //metodo mostrar orden
    mostrarOrden(){
        let computadorasOrden = "";
        for(let computadora of this._computadoras){
            computadorasOrden += `\n${computadora}`+ " ";
        }
        console.log(`Orden: ${this._idOrden}, Computadoras: ${computadorasOrden}`);
    }
}//CLASS - Orden

//Test de la clase orden - Proyecto completo
let orden1 = new Orden();
orden1.agregarComputadora(C1);
orden1.mostrarOrden();
orden1.agregarComputadora(C2);
orden1.mostrarOrden();

let orden2 = new Orden();
orden2.agregarComputadora(C2);
orden2.agregarComputadora(C1);
orden2.mostrarOrden(); 