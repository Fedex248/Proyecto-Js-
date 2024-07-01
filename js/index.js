// Función para guardar datos del usuario en localStorage
function guardarDatosUsuario(nombre, apellido, usuario, correo, contrasena, edad, dni, nacionalidad) {
    const usuarioDatos = {
        nombre: nombre,
        apellido: apellido,
        usuario: usuario,
        correo: correo,
        contrasena: contrasena,
        edad: edad,
        dni: dni,
        nacionalidad: nacionalidad
    };

    // Convertir a formato JSON y guardar en localStorage
    localStorage.setItem('usuarioDatos', JSON.stringify(usuarioDatos));
}

// Función para obtener datos del usuario desde localStorage
function obtenerDatosUsuario() {
    const usuarioDatos = localStorage.getItem('usuarioDatos');
    return usuarioDatos ? JSON.parse(usuarioDatos) : null;
}

// Función para mostrar los datos de cuenta del usuario
function mostrarDatosCuenta() {
    const datosUsuario = obtenerDatosUsuario();

    if (datosUsuario) {
        document.getElementById('nombre').value = datosUsuario.nombre;
        document.getElementById('apellido').value = datosUsuario.apellido;
        document.getElementById('usuario').value = datosUsuario.usuario;
        document.getElementById('correo').value = datosUsuario.correo;
        document.getElementById('edad').value = datosUsuario.edad;
        document.getElementById('dni').value = datosUsuario.dni;
        document.getElementById('nacionalidad').value = datosUsuario.nacionalidad;
    } else {
        console.error('No se encontraron datos de usuario almacenados.');
    }
}

// Evento de registro
const formularioRegistro = document.getElementById('formularioRegistro');
if (formularioRegistro) {
    formularioRegistro.addEventListener('submit', function(event) {
        event.preventDefault();

        const nombre = document.getElementById('nombre').value;
        const apellido = document.getElementById('apellido').value;
        const usuario = document.getElementById('usuario').value;
        const correo = document.getElementById('correo').value;
        const contrasena = document.getElementById('contrasena').value;
        const edad = document.getElementById('edad').value;
        const dni = document.getElementById('dni').value;
        const nacionalidad = document.getElementById('nacionalidad').value;

        // Guardar datos en localStorage
        guardarDatosUsuario(nombre, apellido, usuario, correo, contrasena, edad, dni, nacionalidad);

        // Mostrar datos de cuenta actualizados
        mostrarDatosCuenta();

        // Limpiar formulario (opcional)
        formularioRegistro.reset();
    });
}

// Evento de inicio de sesión
const formularioInicioSesion = document.getElementById('formularioInicioSesion');
if (formularioInicioSesion) {
    formularioInicioSesion.addEventListener('submit', function(event) {
        event.preventDefault();

        const nombreUsuario = document.getElementById('nombreUsuario').value;
        const contrasena = document.getElementById('contrasenaInicio').value;

        // Obtener datos del usuario desde localStorage
        const datosUsuario = obtenerDatosUsuario();

        // Validar credenciales
        if (datosUsuario && datosUsuario.usuario === nombreUsuario && datosUsuario.contrasena === contrasena) {
            // Mostrar datos de cuenta actualizados
            mostrarDatosCuenta();
        } else {
            console.error('Nombre de usuario o contraseña incorrectos');
        }

        // Limpiar formulario (opcional)
        formularioInicioSesion.reset();
    });
}

// Mostrar datos de cuenta al cargar la página
document.addEventListener('DOMContentLoaded', mostrarDatosCuenta);



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

//let nombreBusqueda = prompt("Por favor, ingresa el nombre del videojuego que deseas buscar:");
//let videojuegoBuscado = buscarVideojuego(nombreBusqueda);

if (videojuegoBuscado) {
    console.log(`¡Encontramos "${videojuegoBuscado.nombre}" en nuestra tienda! Precio: $${videojuegoBuscado.precio}`);
} else {
    console.log(`Lo siento, "${nombreBusqueda}" no está disponible en nuestra tienda.`);
}
