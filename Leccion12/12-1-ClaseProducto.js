class Producto{
    //variables estaticas
    static contadorProductos = 0;

    //constructor
    constructor(nombre,precio){
        this._idProducto = ++Producto.contadorProductos;
        this._nombre = nombre;
        this._precio = precio;
    }

    //metodos get y set
    get idProducto(){
        return this._idProducto;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get precio(){
        return this._precio;
    }
    set precio(precio){
        return this._precio = precio;
    }

    //metodo toString()-Puede ser concatenado o en Template literal
    toString(){
        return `idProducto: ${this._idProducto}, nombre: ${this._nombre}, precio: ${this._precio} `;
    }
}//CLASS-Producto

//Test de la clase producto
let producto1 = new Producto("Arduino",100);
let producto2 = new Producto("Jumpers",60);
console.log(producto1.toString());
console.log(producto2.toString());
