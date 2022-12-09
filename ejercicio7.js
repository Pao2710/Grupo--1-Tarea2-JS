/** 
 * Ejercicio 7
 * Crear una fuction que calcule la edad de una persona en base a su año de nacimiento y fecha actual podrá hacer uso de métodos JavaScript (DATE,getDate,getFullYear)para realizar el cálculo.
 */

function calcularEdad() {
    let fecha_actual = new Date();
    let fecha_nac = new Date("1992-08-19");
    console.log(fecha_actual);
    console.log(fecha_nac);

    console.log(fecha_nac.getFullYear());
    let edad = fecha_actual.getFullYear() - fecha_nac.getFullYear();
    console.log("Tiene " + edad + " años");
}

calcularEdad();