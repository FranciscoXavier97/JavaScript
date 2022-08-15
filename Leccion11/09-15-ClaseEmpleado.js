class Empleado extends Persona{
    //variables estaticas
    static contadorEmpleados;

    //Constructor
    constructor(sueldo){
        this._idEmpleado = ++Empleado.contadorEmpleados;
        this._sueldo = sueldo;
    }

    //metodos get y set
    get _idEmpleado(){
        return this._idEmpleado;
    }
    get sueldo(){
        return this.sueldo;
    }
    set sueldo(sueldo){
        this._sueldo = sueldo;
    }
    
    // toString method
    toString(){
         return `${super.toString()} 
                 ${this._idEmpleado} 
                 ${this._sueldo}`;
    }
}//CLASS