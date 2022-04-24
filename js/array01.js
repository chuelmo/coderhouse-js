class Articulo {
    constructor(id, nombre, precio) {
        this.id = id;
        this.nombre = nombre.toUpperCase();
        this.precio = precio;
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

    toString() {
        return "Nombre: " + this.nombre + " Precio: " + this.precio.toFixed(2);
    }
}

class DataBase {
    constructor() {
        this.articulos = [];
        this.articulos.push(new Articulo(1, "MOUSE", 5));
        this.articulos.push(new Articulo(2, "TECLADO", 10));
        this.articulos.push(new Articulo(3, "MONITOR", 120));
        this.articulos.push(new Articulo(4, "AURICULARES", 20));
    }

    getArticulo(id) {
        for (const articulo of this.articulos) {
            if (articulo.getId() === id) {
                return articulo;
            }
        }
        return null;
    }

    addArticulo(articulo) {
        this.articulos.push(articulo);
    }

    showAllArticulos() {
        let msg = '';
        for (const articulo of this.articulos) {
            msg = msg + articulo.getId() + ' - ' + articulo.getNombre() + '\n';
        }
        return msg;
    }

    getCantidadArticulos() {
        return this.articulos.length;
    }
}

function armarMenu(db) {
    let msg = 'Artículos disponibles\n\n';
    msg = msg + db.showAllArticulos();
    msg = msg + '\n0 - SALIR';
    msg = msg + '\n Ingrese el número del producto deseado';
    return msg;
}

function pedirAndValidarOpcion(db) {
    let opcion;
    do {
        error = false;
        opcion = parseInt(prompt(armarMenu(db)));
        if (isNaN(opcion)) {
            error = true;
        } else if (opcion < 0 || opcion > db.getCantidadArticulos()) {
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
const db = new DataBase(); //El objeto tiene un array de artículos
const mic = new Articulo(db.getCantidadArticulos() + 1, "Microfono", 16); //Creo un artículo cualquiera
db.addArticulo(mic); //lo agrego a la "base de datos" que ya tiene artículos

let opcion = pedirAndValidarOpcion(db);
let compras = new Map() //En vez de Array utilizo Map para almacenar las compras
while (opcion != 0) {
    addCompra(compras, opcion);
    alert(showCompras(db, compras, 'Estos artículos son los que tiene en su carrito'));
    opcion = pedirAndValidarOpcion(db);
}
if (compras.size === 0) {
    alert("Vaya! No has comprado nada, esperamos volver a verte pronto!");
} else {
    let cuotas = pedirNroCuotas(db, compras);
    alert(showFactura(db, compras, cuotas));
}