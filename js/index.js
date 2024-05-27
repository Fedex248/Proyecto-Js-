// ingreso de nombre, edad y dni

let nombre = prompt("Por favor, ingresa tu nombre:");


if (nombre) {
    let edad = prompt("Por favor, ingresa tu edad:");

    if (edad) {
        let dni = prompt("Por favor, ingresa tu DNI:");

        if (dni) {
            console.log("Nombre:", nombre);
            console.log("Edad:", edad);
            console.log("DNI:", dni);

            console.log(" ¡Bienvenido " + nombre + "! " );

        } else {
            console.log("No ingresaste tu DNI.");
        }FormDataEvent
    } else {
        console.log("No ingresaste tu edad.");
    }
} else {
    console.log("No ingresaste tu nombre.");
}


// Lista de videojuegos disponibles
// juegos para probar: FIFA , Assassin's Creed, Cyberpunk 2077, call of duty

let videojuegos = [
    { nombre: "FIFA", precio: 60000 },
    { nombre: "Assassin's Creed", precio: 50000 },
    { nombre: "Cyberpunk 2077", precio: 40000 },
    { nombre: "call of duty", precio: 60000 }
];

function buscarVideojuego(nombre) {
    for (let i = 0; i < videojuegos.length; i++) {
        if (videojuegos[i].nombre.toLowerCase() === nombre.toLowerCase()) {
            return videojuegos[i];
        }
    }
    return null;
}

let nombreBusqueda = prompt("Por favor, ingresa el nombre del videojuego que deseas buscar:");
let videojuegoBuscado = buscarVideojuego(nombreBusqueda);

if (videojuegoBuscado) {
    console.log(`¡Encontramos "${videojuegoBuscado.nombre}" en nuestra tienda! Precio: $${videojuegoBuscado.precio}`);
} else {
    console.log(`Lo siento, "${nombreBusqueda}" no está disponible en nuestra tienda.`);
}
