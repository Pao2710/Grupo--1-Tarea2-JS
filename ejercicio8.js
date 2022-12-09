/**
 * Ejercicio 8
 * Crear una Fuction para calcular el descuento en viajes turísticos tomando en cuenta lo siguiente: Si el usuario introduce como origen la ciudad de Palma y como destino La costa del Sol, el descuento será de 5%, si el destino es Panchimalco el descuento será del 10% y si el destino es Puerto el Triunfo el descuento será del 15%.
 */

/**function viajesTuristicos(lugar) {
    console.log("Selecione su lugar de destino con los siguientes digitos: 1, 2, 3")
    if (lugar == 1) {
        console.log("Usted escogio la ciudad de Palma y como destino la costa del Sol, tendra un descuento del 5%");
    } else {
        if (lugar == 2) {
            console.log("Usted escogio el destino Panchimalco, tendra un descuento del 10%");
        } else {
            if (lugar == 3) {
                console.log("Usted escogio el destino Puerto el Triunfo, tendra un descuento del 15%");
            } else {
                if (lugar >= 4) {
                    console.log("Ingrese codigo 1. ciudad de Palma y como destino la costa del Sol, 2.Panchimalco 3.Puerto el Triunfo ");
                }
            }
        }
    }
}
viajesTuristicos(4)*/

function viajesTuristicos() {
    var ciudad_origen = 'Palma'
    if (ciudad_origen == 'Palma') {
        var ciudad_destino = "Panchimalco"
        switch (ciudad_destino) {
            case 'Panchimalco':
                var descuento;
                descuento = costoViaje - (costoViaje * 0.10)
                console.log('El cliente es de :' + ciudad_origen);
                console.log('Su destino sera :' + ciudad_destino);
                console.log('Este destino posee descuento del 10%' + descuento);

                break;

            case 'Triunfo':
                console.log('El cliente es de :' + ciudad_origen)
                console.log('Su destino sera :' + ciudad_destino)

                break;
        }
    }
}