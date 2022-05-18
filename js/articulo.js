class Articulo {
    constructor(id, nombre, precio, categoria, descripcion, imagen, alt) {
        this.id = id;
        this.nombre = nombre.toUpperCase();
        this.precio = precio;
        this.categoria = categoria;
        this.descripcion = descripcion;
        this.imagen = imagen;
        this.alt = alt;
    }

    getNombre() {
        return this.nombre;
    }

    getPrecio() {
        return this.precio;
    }

    getId() {
        return this.id;
    }

    getCategoria() {
        return this.categoria;
    }

    getDescripcion() {
        return this.descripcion;
    }

    getUrl() {
        return this.imagen;
    }

    getAlt() {
        return this.alt;
    }

    toString() {
        return "Nombre: " + this.nombre + " Precio: " + this.precio.toFixed(2);
    }
}