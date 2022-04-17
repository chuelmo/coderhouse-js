const EMAIL = 'admin@test.com';
const PASSWORD = 'admin';

const login = function() {
    console.log('Presionaste el botón "Iniciar Sesión"');
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    console.log(`El valor del email es ${email} y la contraseña es ${password}`);
    if (email !== EMAIL || password !== PASSWORD) {
        let myAlert = document.getElementById('liveToast');
        let bsAlert = new bootstrap.Toast(myAlert);
        bsAlert.show();
        console.log('email o contraseña incorrectos!');
    } else {
        console.log('Ingreso correcto!');
        let login = document.getElementById('login');
        login.classList.add('d-none');
        let ejercicio = document.getElementById('ejercicio');
        ejercicio.classList.remove('d-none');
        limpiar();
    }
}

const verificarCampos = function(base, exponente) {
    let ok = true;
    if (isNaN(base)) {
        errores.value = 'La base debe ser un número';
        ok = false;
    } else if (base < -20 || base > 20) {
        errores.value = 'La base debe estar entre -20 y 20';
        ok = false;
    } else if (isNaN(exponente)) {
        errores.value = 'El exponente debe ser un número';
        ok = false;
    } else if (exponente < 0 || exponente > 10) {
        errores.value = 'El exponente debe estar entre 0 y 10';
        ok = false;
    }
    return ok;
}

const calcular = function() {
    console.log('Presionaste el botón "Calcular"');
    document.getElementById('errores').value = '';
    let base = parseInt(document.getElementById('base').value);
    let exponente = parseInt(document.getElementById('exponente').value);
    let ok = verificarCampos(base, exponente);
    if (ok) {
        if (base == 0 && exponente == 0) {
            document.getElementById('resultado').value = 'No está definido';
            console.log('Operación no definida');
        } else if (base == 0) {
            document.getElementById('resultado').value = '0';
            console.log('El resultado es 0');
        } else if (exponente == 0) {
            document.getElementById('resultado').value = '1';
            console.log('El resultado es 1');
        } else {
            let resultado = 1;
            for (i = 0; i < exponente; i++) {
                resultado = resultado * base;
            }
            document.getElementById('resultado').value = resultado;
            console.log(`El resultado es ${resultado}`);
        }
    }
    

}

const limpiar = function() {
    console.log('Presionaste el botón "Limpiar campos"');
    document.getElementById('base').value = '';
    document.getElementById('exponente').value = '';
    document.getElementById('resultado').value = '';
    document.getElementById('errores').value = '';
}

document.getElementById('btnLogin').onclick = login;
document.getElementById('btnLimpiar').onclick = limpiar;
document.getElementById('btnCalcular').onclick = calcular;
