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

class DataBase {
    constructor() {
        this.categoria = [];
        this.categoria.push(new Categoria(1, "COMPUTADORAS"));
        this.categoria.push(new Categoria(2, "NOTEBOOKS"));
        this.categoria.push(new Categoria(3, "MONITORES"));
        this.categoria.push(new Categoria(4, "CELULARES"));
        this.articulos = [];
        this.articulos.push(new Articulo(1, "PC HP 800", 320, this.categoria[0], 'PC HP 800 G1 I5 4° 8GB 128 SSD SLIM USDT', './images/pc01.jpg', 'PC HP'));
        this.articulos.push(new Articulo(2, "Lenovo P310", 400, this.categoria[0], 'Workstation Gamer Lenovo P310 Xeon', './images/pc02.jpg', 'PC LENOVO'));
        this.articulos.push(new Articulo(3, "Lenovo D20", 390, this.categoria[0], 'Workstation Lenovo D20 Xeon E5520 8GB RAM', './images/pc03.jpg', 'PC LENOVO'));
        this.articulos.push(new Articulo(4, "Lenovo P300", 385, this.categoria[0], 'Workstation Gamer Lenovo P300 Xeon', './images/pc04.jpg', 'PC Lenovo'));
        this.articulos.push(new Articulo(5, "Lenovo P710", 560, this.categoria[0], 'Workstation Gamer Lenovo P710 Xeon', './images/pc05.jpg', 'PC Lenovo'));
        this.articulos.push(new Articulo(6, "PC HP Z400", 790, this.categoria[0], 'Servidor HP Z400 Intel Xeon W3550 12 GB RAM', './images/pc06.jpg', 'PC HP'));
        this.articulos.push(new Articulo(7, "PC DELL 7040", 500, this.categoria[0], 'PC DELL OPTIPLEX 7040 I7 6º 8GB 256GB SSD', './images/pc07.jpg', 'PC DELL'));
        this.articulos.push(new Articulo(8, "PC HP 800", 570, this.categoria[0], 'PC HP EliteDesk 800 G2 Core i7 6º Gen. 8GB RAM', './images/pc08.jpg', 'PC HP'));
        this.articulos.push(new Articulo(9, "PC HP G3", 620, this.categoria[0], 'PC HP 800 G3 I7 6º 8GB 256SSD', './images/pc09.jpg', 'PC HP'));
        this.articulos.push(new Articulo(10, "HP EliteDesk", 340, this.categoria[0], 'PC HP EliteDesk 800 G2 I7 6º 16GB 256GB', './images/pc10.jpg', 'PC HP'));
        this.articulos.push(new Articulo(11, "DELL T1700 I7", 840, this.categoria[0], 'PC DELL T1700 I7 4º 16GB 256GB SSD + 2TB', './images/pc11.jpg', 'PC DELL'));

        this.articulos.push(new Articulo(15, "DELL Latitude", 411, this.categoria[1], 'Notebook DELL Latitude 11 3150 Pentium Quad', './images/notebook01.jpg', 'Notebook DELL'));
        this.articulos.push(new Articulo(16, "Toshiba B552", 499, this.categoria[1], 'Notebook Toshiba B552 i5 4GB 120GB SSD 15.6″', './images/notebook02.png', 'Notebook Toshiba'));
        this.articulos.push(new Articulo(17, "LENOVO T430", 380, this.categoria[1], 'Notebook LENOVO T430 I5 3º 8GB 320GB 14″', './images/notebook03.png', 'Notebook Lenovo'));
        this.articulos.push(new Articulo(18, "HP 430", 300, this.categoria[1], 'Notebook HP 430 G2 Celeron 4GB 128GB SSD', './images/notebook04.png', 'Notebook HP'));
        this.articulos.push(new Articulo(19, "HP 430 G3", 415, this.categoria[1], 'Notebook HP 430 G3 Celeron 4GB 128GB 13″', './images/notebook05.png', 'Notebook HP'));
        this.articulos.push(new Articulo(20, "HP 450 G3", 495, this.categoria[1], 'Notebook HP 450 G3 Celeron 4GB 500GB 15″', './images/notebook06.png', 'Notebook HP'));
        this.articulos.push(new Articulo(21, "TOSHIBA R63", 420, this.categoria[1], 'Notebook TOSHIBA R63 I5 6º 8GB 128SSD 13', './images/notebook07.jpg', 'Notebook Toshiba'));
        this.articulos.push(new Articulo(22, "Lenovo ThinkPad T440s", 570, this.categoria[1], 'Lenovo ThinkPad T440s i5.4300U 4ª Gen. – 8GB –', './images/notebook08.jpg', 'Notebook Lenovo'));
        this.articulos.push(new Articulo(23, "LENOVO X250s", 300, this.categoria[1], 'Notebook LENOVO X250 I5 5º 4GB 500GB 12″', './images/notebook09.jpg', 'Notebook Lenovo'));
        this.articulos.push(new Articulo(24, "LENOVO X250 I5", 390, this.categoria[1], 'Notebook LENOVO X250 I5 5º 8GB 256GB 12.5″', './images/notebook10.jpg', 'Notebook Lenovo'));
        this.articulos.push(new Articulo(25, "DELL 7470", 600, this.categoria[1], 'Notebook DELL 7470 I5 6º 4GB 120 SSD 14″', './images/notebook11.jpg', 'Notebook DELL'));
        this.articulos.push(new Articulo(26, "LENOVO T460s", 444, this.categoria[1], 'Notebook LENOVO T460s I5 6º 8GB 256GB', './images/notebook12.jpg', 'Notebook Lenovo'));
        this.articulos.push(new Articulo(27, "DELL 7470 I5", 720, this.categoria[1], 'Notebook DELL 7470 I5 6º 8GB 256SSD 14″', './images/notebook13.jpg', 'Notebook DELL'));
        this.articulos.push(new Articulo(28, "HP 8570P I7", 499, this.categoria[1], 'Notebook HP 8570P I7 3º 4GB 256SSD 15″', './images/notebook14.jpg', 'Notebook HP'));
        this.articulos.push(new Articulo(29, "LENOVO T470s I5", 630, this.categoria[1], 'Notebook LENOVO T470s I5 7º 8GB 256GB', './images/notebook15.jpg', 'Notebook Lenovo'));
        this.articulos.push(new Articulo(30, "DELL E7240 I7", 730, this.categoria[1], 'Notebook DELL E7240 I7 4º 8GB 256SSD 12″', './images/notebook16.jpg', 'Notebook DELL '));
        this.articulos.push(new Articulo(31, "HP Spectre x360", 820, this.categoria[1], 'Notebook HP Spectre x360 G2 I5 6º 8GB', './images/notebook17.jpg', 'Notebook HP'));
        this.articulos.push(new Articulo(32, "HP EliteBook x360", 710, this.categoria[1], 'HP EliteBook x360 1030 G2 I7 7º 16GB 256GB 13″', './images/notebook18.jpg', 'Notebook HP'));

        this.articulos.push(new Articulo(12, "DELL P22", 270, this.categoria[2], 'Monitor Dell P2210f 22″', './images/monitor01.jpg', 'Monitor DELL'));
        this.articulos.push(new Articulo(13, "Lenovo LT22", 310, this.categoria[2], 'Monitor Lenovo ThinkVision LT2251p 22″', './images/monitor02.jpg', 'Monitor Lenovo'));
        this.articulos.push(new Articulo(14, "Samsung 55", 925, this.categoria[2], 'Monitor Pantalla Profesional Samsung 55″', './images/monitor03.jpg', 'Monitor Samsung'));

        this.articulos.push(new Articulo(33, "iPhone 5C", 250, this.categoria[3], 'Celular Apple iPhone 5c 16Gb', './images/phone01.jpg', 'Celular iPhone'));
        this.articulos.push(new Articulo(34, "Celular Crosscall", 170, this.categoria[3], 'Celular Crosscall Trekker X3 32GB 5.0″', './images/phone02.jpg', 'Celular Crosscall'));
        this.articulos.push(new Articulo(35, "Sony Xperia", 199, this.categoria[3], 'Celular Sony Xperia M2 (D2303)', './images/phone03.jpg', 'Celular Sony'));
        this.articulos.push(new Articulo(36, "Sony Xperia Z", 299, this.categoria[3], 'Celular Sony Xperia Z (C6603)', './images/phone04.jpg', 'Celular Sony'));
        this.articulos.push(new Articulo(37, "iPhone 6", 310, this.categoria[3], 'Celular Apple iPhone 6 64Gb Con Case de regalo', './images/phone05.jpg', 'Celular iPhone 6'));
        this.articulos.push(new Articulo(38, "Celular CAT", 290, this.categoria[3], 'Celular CAT S40 16GB 4.7″', './images/phone06.jpg', 'Celular Cat'));
        this.articulos.push(new Articulo(39, "Samsung Galaxy XCover", 440, this.categoria[3], 'Celular Samsung Galaxy Xcover 4 G390F', './images/phone07.jpg', 'Samsung Galaxy'));
        this.articulos.push(new Articulo(40, "iPhone 6s", 339, this.categoria[3], 'Celular Apple iPhone 6s 128Gb Con Case de regalo', './images/phone08.jpg', 'iPhone 6s'));
        this.articulos.push(new Articulo(41, "iPhone 6s Plus", 411, this.categoria[3], 'Celular Apple iPhone 6s Plus 128Gb Con Case de regalo', './images/phone09.jpg', 'iPhone 6s plus'));
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

function showArticulos(db, categoria) {
    const templateParaCadaProducto = document.getElementById('eachProduct').content;
    const fragment = document.createDocumentFragment();
    let articulos = db.getArticulosByCategoria(categoria);
    for (const articulo of articulos) {
        let img = templateParaCadaProducto.querySelector('img');
        img.src = articulo.getUrl();
        img.alt = articulo.getAlt();
        templateParaCadaProducto.querySelector('h5').textContent = articulo.getNombre();
        templateParaCadaProducto.querySelector('h6').textContent = "U$S " + articulo.getPrecio();
        templateParaCadaProducto.querySelector('p').textContent = articulo.getDescripcion();
        templateParaCadaProducto.querySelector('button').id = articulo.getId();

        let clone = templateParaCadaProducto.cloneNode(true);
        fragment.appendChild(clone);
    }
    contenedorDeProductos.appendChild(fragment);
}

function dibujarFilaTabla(articulo, cantidad, subtotal) {
    let fila = document.createElement('template');
    fila.innerHTML = `
        <tr>
            <td>
            <img
                src="${articulo.getUrl()}"
                alt="logo"
                width="30"
                height="30"
                class="rounded-circle"
            />
            </td>
            <td id="filaTabla_categoria">${articulo.getCategoria().getNombre()}</td>
            <td id="filaTabla_nombre">${articulo.getNombre()}</td>
            <td class="text-end" id="filaTabla_precio">${articulo.getPrecio()}</td>
            <td class="text-end" id="filaTabla_cantidad">${cantidad}</td>
            <td class="text-end" id="filaTabla_flechas">
            <a href="#"><i class="fs-4 bi-arrow-up-circle"></i></a>
            <a href="#"><i class="fs-4 bi-arrow-down-circle"></i></a>
            </td>
            <td class="text-end" id="filaTabla_total">${subtotal}</td>
        </tr>`;
    return fila;
}

function dibujarFilaTablaPie(total, tipo) {
    let filaPie = document.createElement('template');
    let clase;
    if (tipo === "TOTAL") {
        clase = "table-danger";
    } else {
        clase = "table-info";
    }
    filaPie.innerHTML = `
        <tr class="${clase}">
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td colspan="2" class="text-end" id="filaTablaPie_titulo">${tipo}</td>
            <td class="text-end" id="filaTablaPie_valor">U$S ${total.toFixed(2)}</td>
        </tr>`;
    return filaPie;
}

function showCarrito(db, compras) {
    if (compras.size === 0) {
        const templateCarrito = document.getElementById('templateCarritoVacio').content;
        const fragment = document.createDocumentFragment();
        let clone = templateCarrito.cloneNode(true);
        fragment.appendChild(clone);
        contenedorTablaCarrito.appendChild(fragment);     
    } else {
        const templateCarrito = document.getElementById('templateCarrito').content;
        let cloneTabla = templateCarrito.cloneNode(true);
        let cantidad = 0;
        let subtotal = 0;
        let total = 0;
        for (let id of compras.keys()) {
            let articulo = db.getArticulo(id);
            let cantidad = compras.get(id);
            let subtotal = (articulo.getPrecio() * cantidad);
            total = total + subtotal;
            let fila = dibujarFilaTabla(articulo, cantidad, subtotal);            
            cloneTabla.querySelector('tbody').appendChild(fila.content);
        }
        let filaSubtotal = dibujarFilaTablaPie(total, "Subtotal");
        cloneTabla.querySelector('tbody').appendChild(filaSubtotal.content);
        let filaIVA = dibujarFilaTablaPie(total * 0.21, "I.V.A.");
        cloneTabla.querySelector('tbody').appendChild(filaIVA.content);
        let filaTotal = dibujarFilaTablaPie(total * 1.21, "TOTAL");
        cloneTabla.querySelector('tbody').appendChild(filaTotal.content);
        const fragment = document.createDocumentFragment();
        fragment.appendChild(cloneTabla);
        contenedorTablaCarrito.appendChild(fragment);
    }
}

function addFunctionalityToButtons(compras) {
    const btnsCompra = document.querySelectorAll('.compras');

    btnsCompra.forEach(btn => {
        btn.addEventListener('click', function handleClick(event) {
            addCompra(compras, event.target.id);
        });
    });
}

function addCompra(compras, id) {
    let idArticulo = parseInt(id);
    if (compras.has(idArticulo)) {
        let cantidad = compras.get(idArticulo) + 1;
        compras.set(idArticulo, cantidad);
    } else {
        compras.set(idArticulo, 1);
    }
}

// Manejo del DOM
// Programa Principal

const db = new DataBase(); //al instanciar la db se crean todos los artículos
let compras = new Map(); // Colección para almacenar las compras
const contenedorDeProductos = document.getElementById('todosLosProductos'); //div que contendrá todos los productos
const contenedorTablaCarrito = document.getElementById('tablaCarrito'); //div que contendrá el carrito de compra

showArticulos(db, "COMPUTADORAS"); // cuando se carga la página se muestran por defecto todos los artículos de la categoría COMPUTADORAS

// Se manipula el DOM para que dependiendo en que categoría se haga click se muestren
// solo los artículos pertenecientes a esa Categoría
document.getElementById('Computadoras').addEventListener('click', (e) => {
    contenedorDeProductos.innerHTML = "";
    contenedorTablaCarrito.innerHTML = "";
    showArticulos(db, "COMPUTADORAS");
    addFunctionalityToButtons(compras);
})

document.getElementById('Monitores').addEventListener('click', (e) => {
    contenedorDeProductos.innerHTML = "";
    contenedorTablaCarrito.innerHTML = "";
    showArticulos(db, "MONITORES");
    addFunctionalityToButtons(compras);
});

document.getElementById('Celulares').addEventListener('click', (e) => {
    contenedorDeProductos.innerHTML = "";
    contenedorTablaCarrito.innerHTML = "";
    showArticulos(db, "CELULARES");
    addFunctionalityToButtons(compras);
});

document.getElementById('Notebooks').addEventListener('click', (e) => {
    contenedorDeProductos.innerHTML = "";
    contenedorTablaCarrito.innerHTML = "";
    showArticulos(db, "NOTEBOOKS");
    addFunctionalityToButtons(compras);
});

//Muestra el carrito de compras
document.getElementById('Carrito').addEventListener('click', (e) => {
    contenedorDeProductos.innerHTML = "";
    contenedorTablaCarrito.innerHTML = "";
    showCarrito(db, compras);
});
