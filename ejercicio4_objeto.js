/**
 * Ejercicio 4
 * Calcular el aumento de trabajador tomando en cuenta la tabla de categorías de aumento. Para este ejercicio deberá de asignar las siguientes variables: Nombre, Salario, categoría y aumento. Deberá demostrar en consola los datos del empleado y el aumento salarial.
 */

let animal = {
    nombre: "pancho",
    edad: 5,
    comida: "pollo"
}

//trabajando con un array de objetos
let empleados = [
    //posicion[0][1]
    {
        "nombre": "Karina Chavez", //subposicion[0]
        "salario": 500, //subposicion[1]
        "categoria": "A" //subposicion[2]
    },

    //posicion[1][2]
    {
        "nombre": "Juan Mendez",
        "salario": 570,
        "categoria": "B"
    },

    //posicion[2]
    {
        "nombre": "Sandra Murcia",
        "salario": 625,
        "categoria": "C"
    },

    //posicion[3]
    {
        "nombre": "Kevin Landaverde",
        "salario": 700,
        "categoria": "D"
    },

    //posicion[4]
    {
        "nombre": "Diana Huezo",
        "salario": 850,
        "categoria": "B"
    }
]

let salario_total = 0

//Trabajando con la estructura foreach
empleados.forEach(elemento_empleados => {
    //console.log(elemento_empleados.nombre);
    if (elemento_empleados.categoria == "A") {
        //salario =(500 * 0.15) + 500
        salario = (elemento_empleados.salario * 0.15) + elemento_empleados.salario;
        console.log(
            "Nombre del empleado: " + elemento_empleados.nombre + "\n" +
            "Categoria: " + elemento_empleados.categoria + "\n" +
            "Sueldo total: " + salario
        );
    } else if (elemento_empleados.categoria == "B") {
        //salario =(500 * 0.15) + 500
        salario = (elemento_empleados.salario * 0.30) + elemento_empleados.salario;
        console.log(
            "Nombre del empleado: " + elemento_empleados.nombre + "\n" +
            "Categoria: " + elemento_empleados.categoria + "\n" +
            "Sueldo total: " + salario
        );
    } else if (elemento_empleados.categoria == "C") {
        //salario =(500 * 0.10) + 500
        salario = (elemento_empleados.salario * 0.30) + elemento_empleados.salario;
        console.log(
            "Nombre del empleado: " + elemento_empleados.nombre + "\n" +
            "Categoria: " + elemento_empleados.categoria + "\n" +
            "Sueldo total: " + salario
        );
    } else if (elemento_empleados.categoria == "D") {
        //salario =(500 * 0.10) + 500
        salario = (elemento_empleados.salario * 0.20) + elemento_empleados.salario;
        console.log(
            "Nombre del empleado: " + elemento_empleados.nombre + "\n" +
            "Categoria: " + elemento_empleados.categoria + "\n" +
            "Sueldo total: " + salario
        );
    }
})