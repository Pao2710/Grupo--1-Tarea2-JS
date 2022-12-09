/**
 * ejercicio 3 
 * Determinar la nota final de un alumno, la cual depende de lo siguiente: Examen =20% , tareas 40%, * * asistencia =10% e investigación =30% , al final deberá mostrar los datos del alumno , nombre , carnet y nota final. Para este ejercicio deberá de utilizar una fuction y asignar parámetros para llenar los valores.
 */

/**
 * nota final = examen, tarea, asistencia, investigacion
 * nombre, carnet
 */

function promedio_estudiante(nombre, carnet, examen, tarea, asistencia, investigacion) {
    let promedio = 0;
    examen = examen * 0.20;
    tarea = tarea * 0.40;
    asistencia = asistencia * 0.10;
    investigacion = investigacion * 0.30;

    promedio = examen + tarea + asistencia + investigacion;
    if (promedio > 6) {
        console.log(
            "Querido estudiante " + nombre + "con el numero de carnet " + carnet +
            "has aprobado con promedio de " + promedio +
            "\n" + "Felicidades!"
        );
    } else {
        console.log(
            "Querido estudiante " + nombre + " con el numero de carnet " + carnet +
            "no aprobaste :( tu promedio es " + promedio
        );
    }
}
promedio_estudiante("Paola Saldivar", "pm7894", 8, 8.5, 10, 7);
promedio_estudiante("Karla Guerra", "pm7894", 4, 4, 10, 7);