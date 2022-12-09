/**
 * Ejercicio 4
 * Calcular el aumento de trabajador tomando en cuenta la tabla de categorías de aumento. Para este ejercicio deberá de asignar las siguientes variables: Nombre, Salario, categoría y aumento. Deberá demostrar en consola los datos del empleado y el aumento salarial.
 */

let categoría = "D";
let salario = 1200;

if (categoria == "A") {
    salario = (salario * 0.15) + salario;
    console.log("Salario total: " + salario);
} else if (categoría == "B") {
    salario = (salario * 0.30) + salario;
    console.log("Salario total: " + salario);
} else if (categoría == "C") {
    salario = (salario * 0.10) + salario;
    console.log("Salario total: " + salario);
} else if (categoría == "D") {
    salario = (salario * 0.20) + salario;
    console.log("Salario total: " + salario);
} else {
    console.log("Catgoria incorrecta");
}