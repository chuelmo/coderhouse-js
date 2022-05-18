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

// Como no tenemos backend debo simular una DB hardcodeando artículos
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

// toma del html el template que hice con la tarjeta de cada artículo
// la completa con los datos sacados de la clase DataBase según
// cada categoría y agrega la tarjeta al DOM para que se vea.
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

// El carrito de compras tiene una fila por cada artículo comprado
// esta función dibuja esa fila en la tabla, podría haber hecho
// el template en el html pero este es otro enfoque, escribir
// el html desde javascript.
function dibujarFilaTabla(articulo, cantidad, subtotal) {
    let fila = document.createElement('template');
    fila.innerHTML = `
        <tr>
            <td>
                <img src="${articulo.getUrl()}" alt="logo" width="30" height="30" class="rounded-circle"/>
            </td>
            <td id="filaTabla_categoria${articulo.getId()}">${articulo.getCategoria().getNombre()}</td>
            <td id="filaTabla_nombre${articulo.getId()}">${articulo.getNombre()}</td>
            <td class="text-end" id="filaTabla_precio${articulo.getId()}">${articulo.getPrecio()}</td>
            <td class="text-end" id="filaTabla_cantidad${articulo.getId()}">${cantidad}</td>
            <td class="text-end" id="filaTabla_flechas${articulo.getId()}">
            <button class="btn btn-secondary"><i id="btn_add_${articulo.getId()}" class="fs-4 bi-arrow-up-circle btn_add"></i></button>
            <button class="btn btn-secondary"><i id="btn_minus_${articulo.getId()}" class="fs-4 bi-arrow-down-circle btn_minus"></i></button>
            </td>
            <td class="text-end" id="filaTabla_total${articulo.getId()}">${subtotal}</td>
        </tr>`;
    return fila;
}

// Idem función dibujarFilaTabla pero para el pie de la tabla
// en el pie está el subtotal, el iva y el total
// dibuja una sola fila, así que hay que llamarla 3 veces.
function dibujarFilaTablaPie(total, tipo) {
    let filaPie = document.createElement('template');
    let clase = (tipo === "TOTAL") ? "table-danger" :  "table-info";  //cambié if por operador ternario
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

function showCarritoVacio() {
    const templateCarrito = document.getElementById('templateCarritoVacio').content;
    const fragment = document.createDocumentFragment();
    let clone = templateCarrito.cloneNode(true);
    fragment.appendChild(clone);
    contenedorTablaCarrito.appendChild(fragment);  
}

function showLineasCarrito(db, cloneTabla) {
    let cantidad = 0;
    let subtotal = 0;
    let total = 0;
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        if (key !== CLAVE_LOCALSTORAGE) { //es el valor que uso para saber si el carrito está vacío, lo desestimo aquí.
            let id = parseInt(key.substring(10)); //le saco la palabra CoderHouse a la clave para obtener el id.
            let articulo = db.getArticulo(id);
            let compraParse = JSON.parse(localStorage.getItem(key));
            let compra = new Compra(compraParse.id, compraParse.cantidad);
            let cantidad = parseInt(compra.getCantidad());
            let subtotal = (articulo.getPrecio() * cantidad);
            total = total + subtotal;
            let fila = dibujarFilaTabla(articulo, cantidad, subtotal);            
            cloneTabla.querySelector('tbody').appendChild(fila.content);
        }
    }
    return total;
}

function showPieCarrito(total, cloneTabla) {
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

// Muestra el carrito de compras dibujando la tabla correspondiente
// También hace los cálculos del total a pagar.
function showCarrito(db) {
    if (localStorage.getItem(CLAVE_LOCALSTORAGE) === null) {
        showCarritoVacio();
    } else {
        const templateCarrito = document.getElementById('templateCarrito').content;
        let cloneTabla = templateCarrito.cloneNode(true);
        let total = showLineasCarrito(db, cloneTabla);
        showPieCarrito(total, cloneTabla);
    }
}

// Le agrega el manejo del evento 'click' a todos los botones de Compra.
function addFunctionalityToButtons() {
    const btnsCompra = document.querySelectorAll('.compras');

    btnsCompra.forEach(btn => {
        btn.addEventListener('click', function handleClick(event) {
            addCompra(event.target.id);
        });
    });
}

//Le agrega el manejo del evento 'click' a los botones del carrito
//Son 3 tipos de botones, el de incrementar la cantidad de un producto
//el de decrementar y el botón de vaciar el carrito.
function addFunctionalityCarritoButtons() {
    const btnsAdd = document.querySelectorAll('.btn_add');
    const btnsMinus = document.querySelectorAll('.btn_minus');
    const vaciarCarro = document.getElementById('vaciarCarrito');

    btnsAdd.forEach(btn => { //botones para aumentar la cantidad comprada
        btn.addEventListener('click', function handleClick(event) {
            let campos = event.currentTarget.id.split('_'); //el id es de la forma btn_add_id
            let idCoderHouse = "CoderHouse" + campos[2]; //me quedo solo con el id del articulo
            addOneProductMore(idCoderHouse);
        });
    });

    btnsMinus.forEach(btn => { //botones para disminuir la cantidad comprada
        btn.addEventListener('click', function handleClick(event) {
            let campos = event.currentTarget.id.split('_'); //el id es de la forma btn_minus_id
            let idCoderHouse = "CoderHouse" + campos[2]; //me quedo solo con el id del articulo
            removeOneProduct(idCoderHouse);
        });
    });

    vaciarCarro.addEventListener('click', function handleClick(event) {
        localStorage.clear();
        contenedorDeProductos.innerHTML = "";
        contenedorTablaCarrito.innerHTML = "";
        showCarrito(db);
    });
}

// Se incrementa la cantidad de un producto comprado al hacer click en el botón 
// aumentar (representado por una flechita para arriba)
function addOneProductMore(idCoderHouse) {
    let compraParse = JSON.parse(localStorage.getItem(idCoderHouse));
    let compra = new Compra(compraParse.id, compraParse.cantidad);
    let cantidad = parseInt(compra.getCantidad()) + 1;
    compra.setCantidad(cantidad.toString());
    localStorage.setItem(idCoderHouse, JSON.stringify(compra));
    contenedorDeProductos.innerHTML = "";
    contenedorTablaCarrito.innerHTML = "";
    showCarrito(db);
    addFunctionalityCarritoButtons();
}

function removeOneProduct(idCoderHouse) {
    let compraParse = JSON.parse(localStorage.getItem(idCoderHouse));
    let compra = new Compra(compraParse.id, compraParse.cantidad);
    let cantidad = parseInt(compra.getCantidad()) - 1;
    if (cantidad < 0) {
        cantidad = 0;
    }
    compra.setCantidad(cantidad.toString());
    localStorage.setItem(idCoderHouse, JSON.stringify(compra));
    contenedorDeProductos.innerHTML = "";
    contenedorTablaCarrito.innerHTML = "";
    showCarrito(db);
    addFunctionalityCarritoButtons();
}

// Esta función dejó de utilizar un Map para guardar las compras
// para pasar a usar el localStorage.
// Agrega en el localStorage una clave formada por la palabra CoderHouse más el id del artículo
// el valor para la clave es 1 si es la primera compra y si no le suma uno a la cantidad.
function addCompra(id) {
    localStorage.setItem(CLAVE_LOCALSTORAGE, "CoderHouse"); //Esta clave la utilizo para saber que el carrito no está vacío
    let idCoderHouse = "CoderHouse" + id; //Solo para "personalizar" el id
    if (localStorage.getItem(idCoderHouse) === null) {
        let compra = new Compra(id, 1); // creo el objeto compra para guardarlo en el localStorage
        localStorage.setItem(idCoderHouse, JSON.stringify(compra)); // más fácil sería poner directamente el valor, de esta manera
                                                                    // cumplo con la rúbrica de usar JSON.stringify
    } else {
        let compraParse = JSON.parse(localStorage.getItem(idCoderHouse));
        let compra = new Compra(compraParse.id, compraParse.cantidad);
        let cantidad = parseInt(compra.getCantidad()) + 1;
        compra.setCantidad(cantidad.toString());
        localStorage.setItem(idCoderHouse, JSON.stringify(compra));
    }
}

// Manejo del DOM
// Programa Principal

const CLAVE_LOCALSTORAGE = "CursoJS_CoderHouse"; //clave para identificar si el carrito está vacío
const db = new DataBase(); //al instanciar la db se crean todos los artículos
const contenedorDeProductos = document.getElementById('todosLosProductos'); //div que contendrá todos los productos
const contenedorTablaCarrito = document.getElementById('tablaCarrito'); //div que contendrá el carrito de compra

showArticulos(db, "COMPUTADORAS"); // cuando se carga la página se muestran por defecto todos los artículos de la categoría COMPUTADORAS
addFunctionalityToButtons();

// Se manipula el DOM para que dependiendo en que categoría se haga click se muestren
// solo los artículos pertenecientes a esa Categoría
document.getElementById('Computadoras').addEventListener('click', (e) => {
    contenedorDeProductos.innerHTML = "";
    contenedorTablaCarrito.innerHTML = "";
    showArticulos(db, "COMPUTADORAS");
    addFunctionalityToButtons();
})

document.getElementById('Monitores').addEventListener('click', (e) => {
    contenedorDeProductos.innerHTML = "";
    contenedorTablaCarrito.innerHTML = "";
    showArticulos(db, "MONITORES");
    addFunctionalityToButtons();
});

document.getElementById('Celulares').addEventListener('click', (e) => {
    contenedorDeProductos.innerHTML = "";
    contenedorTablaCarrito.innerHTML = "";
    showArticulos(db, "CELULARES");
    addFunctionalityToButtons();
});

document.getElementById('Notebooks').addEventListener('click', (e) => {
    contenedorDeProductos.innerHTML = "";
    contenedorTablaCarrito.innerHTML = "";
    showArticulos(db, "NOTEBOOKS");
    addFunctionalityToButtons();
});

//Muestra el carrito de compras
document.getElementById('Carrito').addEventListener('click', (e) => {
    contenedorDeProductos.innerHTML = "";
    contenedorTablaCarrito.innerHTML = "";
    showCarrito(db);
    addFunctionalityCarritoButtons();
});
