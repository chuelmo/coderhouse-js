const PRECIO_MOUSE = 5;
const PRECIO_TECLADO = 10;
const PRECIO_MONITOR = 120;
const PRECIO_AURICULARES = 20;
const MENU_ARTICULOS = `Elija un artículo
1 - Mouse
2 - Teclado
3 - Monitor
4 - Auriculares
0 - Salir`;
const SALIR = "0";
const MOUSE = "1";
const TECLADO = "2";
const MONITOR = "3";
const AURICULAR = "4";

let ratones = 0;
let teclados = 0;
let monitores = 0;
let auriculares = 0;
let totalArticulos = 0;

function mostrarCompras(ratones, teclados, monitores, auriculares) {
    let mensaje = "Hasta el momento usted ha comprado:\n";
    mensaje = mensaje + ratones + " ratones\n";
    mensaje = mensaje + teclados + " teclados\n";
    mensaje = mensaje + monitores + " monitores\n";
    mensaje = mensaje + auriculares + " auriculaes\n";
    return mensaje;
}

function menu() {
    let opcion = prompt(MENU_ARTICULOS);
    while (opcion != SALIR) {
        switch (opcion) {
            case MOUSE:
                ratones = ratones + 1;
                break;
            case TECLADO:
                teclados = teclados + 1;
                break;
            case MONITOR:
                monitores = monitores + 1;
                break;
            case AURICULAR:
                auriculares = auriculares + 1;
                break;
            default:
                break;
        }
        let msg = mostrarCompras(ratones, teclados, monitores, auriculares);
        alert(msg);
        opcion = prompt(MENU_ARTICULOS);
    }
}

function calcularValorCompra(ratones, teclados, monitores, auriculares) {
    let total = ratones * PRECIO_MOUSE;
    total = total + (teclados * PRECIO_TECLADO);
    total = total + (monitores * PRECIO_MONITOR);
    total = total + (auriculares * PRECIO_AURICULARES);
    return total;
}

const calcularIVA = x => x * 0.21;

function armarMensajeCuotas(ratones, teclados, monitores, auriculares, subTotalCompra, iva, totalCompra) {
    let mensaje = mostrarCompras(ratones, teclados, monitores, auriculares);
    mensaje = mensaje + "\n\n El subtotal de su compra es: " + subTotalCompra + "\n";
    mensaje = mensaje + " El I.V.A. de su compra es: " + iva + "\n";
    mensaje = mensaje + " El total de su compra es: " + totalCompra + "\n\n";
    mensaje = mensaje + " En cuántas cuotas desea pagar (1 - 10)?";
    return mensaje;
}

function mostrarMensajeFinal(totalCompra, cuotas) {
    nroCuotas = parseInt(cuotas);
    if (isNaN(nroCuotas)) {
        nroCuotas = 1;
    }
    if (nroCuotas < 1 || nroCuotas > 10) {
        nroCuotas = 1;
    }
    let mensaje = '';
    if (nroCuotas === 1) {
        mensaje = 'Usted ha decidido pagar al contado\n';
        mensaje = mensaje + 'El monto de su compra impuestos incluidos es de: ' + totalCompra;
        mensaje = mensaje + "\n\n Gracias por su compra!"
    } else {
        mensaje = 'El monto de su compra es de: ' + totalCompra + "\n";
        mensaje = mensaje + 'Lo pagará en ' + nroCuotas + ' cuotas de $' + (totalCompra / nroCuotas);
        mensaje = mensaje + '\n\n Gracias por su compra!';
    }
    alert(mensaje);
}

menu(); // usa las variables globales
totalArticulos = ratones + teclados + monitores + auriculares;
if (totalArticulos === 0) {
    alert("Qué lástima, te vas sin comprar nada, hasta pronto!");
} else {
    let subTotalCompra = calcularValorCompra(ratones, teclados, monitores, auriculares);
    let iva = calcularIVA(subTotalCompra);
    let totalCompra = subTotalCompra + iva;
    let mensaje = armarMensajeCuotas(ratones, teclados, monitores, auriculares, subTotalCompra, iva, totalCompra);
    let cuotas = prompt(mensaje);
    mostrarMensajeFinal(totalCompra, cuotas);
}
