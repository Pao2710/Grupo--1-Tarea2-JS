/**
 * Ejercicio 2
 * Crear 3 Fuctions que calcule 2 números enteros y muestre en consola el resultado de la suma, resta, * * multiplicación y división. Puede utilizar parámetros o variables locales para asignar valores a los *  * números.
 */

function sumar(a, b) {
    let suma = a + b;

    console.log("El resultado de la suma es: " + suma);
}

function restar(a, b) {
    let resta = a - b;

    console.log("El resultado de la resta es: " + Math.abs(resta));
}

function multiplicar(a, b) {
    let multi = a * b;

    console.log("El resultado de la multiplicacion es: " + multi);
}

function division(a, b) {
    let div = a / b;

    console.log("El resultado de la multiplicacion es: " + div.toFixed(2));
}
/**
 * Math.abs pone el valor absoluto de un numero
 */
sumar(10, 20);
restar(8, 3);
multiplicar(20, 50);
division(5, 6);