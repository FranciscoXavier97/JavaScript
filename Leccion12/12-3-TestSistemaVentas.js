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
        return `idProducto: ${this._idProducto}, nombre: ${this._nombre}, precio: $ ${this._precio} `;
    }
}//CLASS-Producto

//Test de la clase producto
let producto1 = new Producto("Arduino",100);
let producto2 = new Producto("Jumpers",60);
let producto3 = new Producto("Transistor", 10);
let producto4 = new Producto("Resistencia 1K",2);
let producto5 = new Producto("Led rojo",2);
let producto6 = new Producto("Pila 9V", 20);

class Orden{
    //variables esataticas
    static contadorOrdenes = 0;

    static get MAX_PRODUCTOS(){
        return 5;
    }

    //constructor
    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._productos = [];
        //this._productosAgregados = 0;
    }

    //metodos get 
    get idOrden(){
        return this._idOrden;
    }

    //metodo mostrar orden
    agregarProducto(producto){
        if(this._productos.length < Orden.MAX_PRODUCTOS){
            this._productos.push(producto);
            //this._productos[this._productosAgregados++] = producto; tambien lo podemos utilizar
        }
        else{
            console.log("No se peuden agregar mas productos");
        }
    }   

    //metodo calcular total
    calcularTotal(){
        let totalVenta = 0;
        for(let producto of this._productos){
            totalVenta += producto.precio; //totalVenta = totalVenta + producto.precio;
        }
        return totalVenta;
    }

    //
    mostrarOrden(){
        let productosOrden = "";
        for (let producto of this._productos){
            productosOrden += "\n{" + producto.toString() + "} ";
        }
        console.log(`Orden: ${this._idOrden} Total: $ ${this.calcularTotal()}, Productos: ${productosOrden}`);
    }
}//CLASS - Orden

//test de la clase orden 
let orden1 = new Orden(); //genera una orden nueva
orden1.agregarProducto(producto1);
orden1.agregarProducto(producto2);
orden1.agregarProducto(producto3);
orden1.agregarProducto(producto4);
orden1.agregarProducto(producto5);
//el limite no se agrega y meustra mensaje por pantalla
orden1.agregarProducto(producto6);
//muestra en consola la orden generada
orden1.mostrarOrden();