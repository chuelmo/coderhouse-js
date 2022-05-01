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

class Articulo {
    constructor(id, nombre, precio, categoria) {
        this.id = id;
        this.nombre = nombre.toUpperCase();
        this.precio = precio;
        this.categoria = categoria;
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

    toString() {
        return "Nombre: " + this.nombre + " Precio: " + this.precio.toFixed(2);
    }
}

class DataBase {
    constructor() {
        this.categoria = [];
        this.categoria.push(new Categoria(1, "COMPUTADORAS"));
        this.categoria.push(new Categoria(2, "NOTEBOOKS"));
        this.categoria.push(new Categoria(3, "MONITORES"));
        this.categoria.push(new Categoria(4, "CELULARES"));
        this.articulos = [];
        this.articulos.push(new Articulo(1, "PC DELL", 455, this.categoria[0]));
        this.articulos.push(new Articulo(2, "PC HP", 535, this.categoria[0]));
        this.articulos.push(new Articulo(3, "PC LENOVO", 799, this.categoria[0]));
        this.articulos.push(new Articulo(4, "PC FUJITSU", 230, this.categoria[0]));

        this.articulos.push(new Articulo(5, "DELL 780", 780, this.categoria[1]));
        this.articulos.push(new Articulo(6, "TOSHIBA SATELITE", 650, this.categoria[1]));
        this.articulos.push(new Articulo(7, "HP ELITEBOOK", 560, this.categoria[1]));
        this.articulos.push(new Articulo(8, "ACER ONE", 750, this.categoria[1]));

        this.articulos.push(new Articulo(9, "VIEWSONIC 22", 275, this.categoria[2]));
        this.articulos.push(new Articulo(10, "AOC 19", 385, this.categoria[2]));
        this.articulos.push(new Articulo(11, "SAMSUNG 14", 150, this.categoria[2]));
        this.articulos.push(new Articulo(12, "VIEWSONIC 43", 500, this.categoria[2]));

        this.articulos.push(new Articulo(13, "IPHONE 10", 590, this.categoria[3]));
        this.articulos.push(new Articulo(14, "SAMSUNG", 700, this.categoria[3]));
        this.articulos.push(new Articulo(15, "CAT X12", 450, this.categoria[3]));
        this.articulos.push(new Articulo(16, "XIAOMI X45", 280, this.categoria[3]));
    }

    getArticulo(id) {
        for (const articulo of this.articulos) {
            if (articulo.getId() === id) {
                return articulo;
            }
        }
        return null;
    }

    getCategoria(id) {
        for (const cat of this.categoria) {
            if (cat.getId() === id) {
                return cat;
            }
        }
        return null;
    }

    showAllArticulosByCategoria(categoria) {
        let msg = '';
        for (const articulo of this.articulos) {
            if (articulo.getCategoria().getId() === categoria.getId()) {
                msg = msg + articulo.getId() + ' - ' + articulo.getNombre() + '\n';
            }
        }
        return msg;
    }

    showAllCategorias() {
        let msg = '';
        for (const cat of this.categoria) {
            msg = msg + cat.getId() + ' - ' + cat.getNombre() + '\n';
        }
        return msg;
    }

    getCategoriasAllIds() {
        let catIds = [];
        for (const cat of this.categoria) {
            catIds.push(cat.getId());
        }
        return catIds;
    }

    getArticulosAllIdsByCategoria(categoria) {
        let artIds = [];
        for (const art of this.articulos) {
            if (art.getCategoria().getId() === categoria.getId()) {
                artIds.push(art.getId());
            }
        }
        return artIds;
    }
}

function armarMenuCategoria(db) {
    let msg = 'Categorías disponibles\n\n';
    msg = msg + db.showAllCategorias();
    msg = msg + '\n0 - SALIR';
    msg = msg + '\n Ingrese el número de la categoría deseada';
    return msg;
}

function armarMenuArticulos(db, categoria) {
    let msg = 'Artículos disponibles\n\n';
    msg = msg + db.showAllArticulosByCategoria(categoria);
    msg = msg + '\n0 - SALIR';
    msg = msg + '\n Ingrese el número del artículo deseado';
    return msg;
}

function pedirAndValidarOpcion(db, categoria) {
    let opcionesValidas;
    let menu;
    if (categoria === null) {
        opcionesValidas = db.getCategoriasAllIds();
        menu = armarMenuCategoria(db);
    } else {
        opcionesValidas = db.getArticulosAllIdsByCategoria(categoria);
        menu = armarMenuArticulos(db, categoria);
    }
    opcionesValidas.push(0);
    let opcion;
    do {
        error = false;
        opcion = parseInt(prompt(menu));
        if (isNaN(opcion)) {
            error = true;
        } else if (!opcionesValidas.includes(opcion)) {
            error = true;
        }
    } while(error);
    return opcion;
}

function addCompra(compras, idArticulo) {
    if (compras.has(idArticulo)) {
        let cantidad = compras.get(idArticulo) + 1;
        compras.set(idArticulo, cantidad);
    } else {
        compras.set(idArticulo, 1);
    }
}

function showCompras(db, compras, titulo) {
    let msg = titulo + '\n\n';
    for (let id of compras.keys()) {
        let articulo = db.getArticulo(id);
        if (articulo != null) {
            let cantidad = compras.get(id);
            let subtotal = articulo.getPrecio() * cantidad;
            msg = msg + articulo.toString() + " Cantidad: " + cantidad + " Subtotal: " + subtotal + "\n";
        }
    }
    return msg;
}

function pedirNroCuotas(db, compras) {
    let cuotas;
    let msg = showCompras(db, compras, 'Esta es su compra');
    msg = msg + '\n\nEn cuántas cuotas quiere pagar? (1/12)';
    do {
        error = false;
        cuotas = parseInt(prompt(msg));
        if (isNaN(cuotas)) {
            error = true;
        } else if (cuotas < 1 || cuotas > 12) {
            error = true;
        }
    } while(error);
    return cuotas;
}

function showFactura(db, compras, cuotas) {
    let msg = showCompras(db, compras, 'Factura de compra');
    let cantidad = 0;
    let subtotal = 0;
    for (let id of compras.keys()) {
        let articulo = db.getArticulo(id);
        if (articulo != null) {
            cantidad = compras.get(id);
            subtotal = subtotal + (articulo.getPrecio() * cantidad);
        }
    }
    msg = msg + "\n\nSUBTOTAL SIN IVA: " + subtotal.toFixed(2) + "\n";
    msg = msg + "IVA: " + (subtotal * 0.22).toFixed(2) + "\n";
    msg = msg + "TOTAL: " + (subtotal * 1.22).toFixed(2) + "\n\n";
    if (cuotas > 1) {
        msg = msg + "Usted pagará en " + cuotas + " cuotas\n";
        msg = msg + "Cada cuota será de " + ((subtotal * 1.22) / cuotas).toFixed(2);
    }
    return msg; 
}

// Programa principal
const db = new DataBase();

let opcion = pedirAndValidarOpcion(db, null);
let compras = new Map() //En vez de Array utilizo Map para almacenar las compras
while (opcion != 0) {
    opcionArticulo = pedirAndValidarOpcion(db, db.getCategoria(opcion));
    if (opcionArticulo === 0) {
        break;
    }
    addCompra(compras, opcionArticulo);
    alert(showCompras(db, compras, 'Estos artículos son los que tiene en su carrito'));
    opcion = pedirAndValidarOpcion(db, null);
}
if (compras.size === 0) {
    alert("Vaya! No has comprado nada, esperamos volver a verte pronto!");
} else {
    let cuotas = pedirNroCuotas(db, compras);
    alert(showFactura(db, compras, cuotas));
}