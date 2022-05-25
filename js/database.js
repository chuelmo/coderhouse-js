// Como no tenemos backend debo simular una DB hardcodeando artículos
class DataBase {
    constructor() {
        this.categoria = [];
        this.categoria.push(new Categoria(1, "COMPUTADORAS"));
        this.categoria.push(new Categoria(2, "NOTEBOOKS"));
        this.categoria.push(new Categoria(3, "MONITORES"));
        this.categoria.push(new Categoria(4, "CELULARES"));
        this.articulos = [];
    }

    addArticulo(articulo) {
        this.articulos.push(articulo);
    }

    getArticulo(id) {
        for (const articulo of this.articulos) {
            if (articulo.getId() === id) {
                return articulo;
            }
        }
        return null;
    }

    getCategoriaById(id) {
        for (const cat of this.categoria) {
            if (cat.getId() === id) {
                return cat;
            }
        }
        return null;
    }

    getCategoriaByName(nombre) {
        for (const cat of this.categoria) {
            if (cat.getNombre() === nombre) {
                return cat;
            }
        }
        return null;
    }

    getArticulosByCategoria(nombreCategoria) {
        let allArticulos = [];
        for (const articulo of this.articulos) {
            if (articulo.getCategoria().getNombre() === nombreCategoria) {
                allArticulos.push(articulo);
            }
        }
        return allArticulos;
    }
}