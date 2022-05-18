// Hay diferentes artículos según la categoría.
class Categoria {
    constructor(id, nombre) {
        this.id = id;
        this.nombre = nombre;
    }

    getId() {
        return this.id;
    }

    getNombre() {
        return this.nombre;
    }
}