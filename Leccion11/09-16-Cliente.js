class Cliente extends Persona{
    //variables static
    static contadorClientes = 0;

    //Constructor
    constructor(fechaRegsitro){
        this._idCliente = ++Cliente.contadorClientes;
        this._fechaRegsitro = fechaRegsitro;
    }

    //Get y Set method
    get id_cliente(){
        return this._idCliente;
    }
    get fechaRegsitro(){
        return this._fechaRegsitro;
    }
    set fechaRegsitro(fechaRegsitro){
        this._fechaRegsitro = fechaRegsitro;
    }

    //toString
    toString(){
        return `${super.toString()} 
                ${this._idCliente} 
                ${this._fechaRegsitro}`;
    }
}//CLASS