// En mi lógica esta clase no es necesaria, pero creo la clase
// para poder utilizar JSON.stringify al guardar la compra
// en el localStorage y cumplir con lo pedido en el ejercicio.
// Sería más fácil solo guardar la cantidad al hacer una
// compra porque el id en el localStorage ya sería el id del artículo.
class Compra {
    constructor(id, cantidad) {
        this.id = id;
        this.cantidad = cantidad;
    }

    getCantidad() {
        return this.cantidad;
    }

    setCantidad(cantidad) {
        this.cantidad = cantidad;
    }
}