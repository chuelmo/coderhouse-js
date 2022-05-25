// toma del html el template que hice con la tarjeta de cada artículo
// la completa con los datos sacados de la clase DataBase según
// cada categoría y agrega la tarjeta al DOM para que se vea.
function showArticulos(categoria) {
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
    let clase = (tipo === "TOTAL") ? "table-danger" : "table-info";  //cambié if por operador ternario
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

function showLineasCarrito(cloneTabla) {
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
function showCarrito() {
    if (localStorage.getItem(CLAVE_LOCALSTORAGE) === null) {
        showCarritoVacio();
    } else {
        const templateCarrito = document.getElementById('templateCarrito').content;
        let cloneTabla = templateCarrito.cloneNode(true);
        let total = showLineasCarrito(cloneTabla);
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

function addFunctionalityAddButtons() {
    const btnsAdd = document.querySelectorAll('.btn_add');
    btnsAdd.forEach(btn => { //botones para aumentar la cantidad comprada
        btn.addEventListener('click', function handleClick(event) {
            let campos = event.currentTarget.id.split('_'); //el id es de la forma btn_add_id
            let idCoderHouse = "CoderHouse" + campos[2]; //me quedo solo con el id del articulo
            addOneProductMore(idCoderHouse);
        });
    });
}

function addFunctionalityMinusButtons() {
    const btnsMinus = document.querySelectorAll('.btn_minus');
    btnsMinus.forEach(btn => { //botones para disminuir la cantidad comprada
        btn.addEventListener('click', function handleClick(event) {
            let campos = event.currentTarget.id.split('_'); //el id es de la forma btn_minus_id
            let idCoderHouse = "CoderHouse" + campos[2]; //me quedo solo con el id del articulo
            removeOneProduct(idCoderHouse);
        });
    });
}

function emptyShoppingCart() {
    swal({
        title: "¿Estás seguro que deseas vaciar el carrito de compras?",
        text: "Una vez vaciado no se podrá recuperar la información almacenada en el carrito",
        icon: "warning",
        buttons: ["Cancelar", "Si"],
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
            localStorage.clear();
            contenedorDeProductos.innerHTML = "";
            contenedorTablaCarrito.innerHTML = "";
            showCarritoVacio();
            swal({
                title: "¡No te vayas sin comprar!",
                text: "¡Tu carrito está ahora vacío!",
                icon: "success",
              });
        }
      });
}

function addFunctionalityVaciarButton() {
    const vaciarCarro = document.getElementById('vaciarCarrito');
    vaciarCarro.addEventListener('click', function handleClick(event) {
        emptyShoppingCart();
    });
}

//Le agrega el manejo del evento 'click' a los botones del carrito
//Son 3 tipos de botones, el de incrementar la cantidad de un producto
//el de decrementar y el botón de vaciar el carrito.
function addFunctionalityCarritoButtons() {
    addFunctionalityAddButtons();
    addFunctionalityMinusButtons();
    addFunctionalityVaciarButton();
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
    showCarrito();
    addFunctionalityCarritoButtons();
}

function removeOneProduct(idCoderHouse) {
    let compraParse = JSON.parse(localStorage.getItem(idCoderHouse));
    let compra = new Compra(compraParse.id, compraParse.cantidad);
    let cantidad = parseInt(compra.getCantidad()) - 1;
    if (cantidad <= 0) {
        localStorage.removeItem(idCoderHouse);
        if (localStorage.length === 1) { //El carrito se vació
            localStorage.removeItem(CLAVE_LOCALSTORAGE);
            contenedorDeProductos.innerHTML = "";
            contenedorTablaCarrito.innerHTML = "";
            showCarritoVacio();
        } else {
            contenedorDeProductos.innerHTML = "";
            contenedorTablaCarrito.innerHTML = "";
            showCarrito();
            addFunctionalityCarritoButtons();
        }
    } else {
        compra.setCantidad(cantidad.toString());
        localStorage.setItem(idCoderHouse, JSON.stringify(compra));
        contenedorDeProductos.innerHTML = "";
        contenedorTablaCarrito.innerHTML = "";
        showCarrito();
        addFunctionalityCarritoButtons();
    }
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

//Se cambió la clase database para que en vez de tener los artículos "hardcodeados"
//en la misma clase, se carguen desde un archivo json, en vez del archivo json
//podría perfectamente ser a través del consumo de un api.
//Esta función asíncrona hace eso exactamente, carga todos los artículos con los
//que he venido trabajando en el objeto db.
//Además pone a correr la app
async function cargarDBandRunApp() {
    try {
        const res = await fetch('/js/db.json');
        const datos = await res.json();
        datos.forEach((article) => {
            let a = new Articulo(article.id, article.nombre, article.precio, db.getCategoriaById(article.categoria), article.descripcion, article.imagen, article.alt);
            db.addArticulo(a);
        });
        runApp();
    } catch (e) {
        console.log(`ERROR: ${e.message}`);
    }
}

function runApp() {
    showArticulos("COMPUTADORAS"); // cuando se carga la página se muestran por defecto todos los artículos de la categoría COMPUTADORAS
    addFunctionalityToButtons();

    // Se manipula el DOM para que dependiendo en que categoría se haga click se muestren
    // solo los artículos pertenecientes a esa Categoría
    document.getElementById('Computadoras').addEventListener('click', (e) => {
        contenedorDeProductos.innerHTML = "";
        contenedorTablaCarrito.innerHTML = "";
        showArticulos("COMPUTADORAS");
        addFunctionalityToButtons();
    })

    document.getElementById('Monitores').addEventListener('click', (e) => {
        contenedorDeProductos.innerHTML = "";
        contenedorTablaCarrito.innerHTML = "";
        showArticulos("MONITORES");
        addFunctionalityToButtons();
    });

    document.getElementById('Celulares').addEventListener('click', (e) => {
        contenedorDeProductos.innerHTML = "";
        contenedorTablaCarrito.innerHTML = "";
        showArticulos("CELULARES");
        addFunctionalityToButtons();
    });

    document.getElementById('Notebooks').addEventListener('click', (e) => {
        contenedorDeProductos.innerHTML = "";
        contenedorTablaCarrito.innerHTML = "";
        showArticulos("NOTEBOOKS");
        addFunctionalityToButtons();
    });

    //Muestra el carrito de compras
    document.getElementById('Carrito').addEventListener('click', (e) => {
        contenedorDeProductos.innerHTML = "";
        contenedorTablaCarrito.innerHTML = "";
        if (localStorage.getItem(CLAVE_LOCALSTORAGE) === null) {
            showCarritoVacio();
        } else {
            showCarrito();
            addFunctionalityCarritoButtons();
        }
    });
}

// Manejo del DOM
// Programa Principal

const CLAVE_LOCALSTORAGE = "CursoJS_CoderHouse"; //clave para identificar si el carrito está vacío
const contenedorDeProductos = document.getElementById('todosLosProductos'); //div que contendrá todos los productos
const contenedorTablaCarrito = document.getElementById('tablaCarrito'); //div que contendrá el carrito de compra
const db = new DataBase();
cargarDBandRunApp();  //Se cargan todos los artículos desde un archivo json y se corre la app



