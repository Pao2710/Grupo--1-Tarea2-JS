/**
 * EJERCICIO 1
 * Crear una función con un parámetro llamado edad que permita calcular si una persona es mayor de edad o * no. Utilizar para la condición el operador ternario.
 */

//condicion ? "mensaje" : "error"

function adulto(edad) {
    /**
     * ? = cuando acepta la condicion
     * : = sino acepta la condicion, hace otro proceso
     */
    edad > 18 ? console.log("Eres mayor de edad") : console.log("No eres mayor de edad");
}
adulto(17)