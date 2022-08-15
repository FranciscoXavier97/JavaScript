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

    //
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
            console.log("No se pueden agregar mas productos");
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
            productosOrden += producto.toString() + " ";
        }
        console.log(`Orden: ${this._idOrden} Total: ${this._calcularTotal()}, Productos: ${productosOrden}`);
    }
}//CLASS - Orden


let orden1 = new Orden();
orden1.agregarProducto(producto1);
orden2.agregarProducto(producto2);

orden1.mostrarOrden();
