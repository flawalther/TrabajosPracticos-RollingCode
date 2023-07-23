// Tarea 1:
// Crear un objeto con datos de usuario: username, state, role. 
// Debe tener dos funciones, una que permita cambiar el estado y otra que muestre información del usuario.

const usuarios = {
    username: "flawalther",
    state: "argentina",
    role: "asistente",
}

const infoUsuarios = () => {
document.write (`Username: ${usuarios.username} <br> State: ${usuarios.state} <br> Role: ${usuarios.role}`);
}

const cambiarState = () => {
usuarios.state = "uruguay";
}

document.write (`<b> Datos de Usuario original: </b><br>`);
infoUsuarios();
cambiarState();
document.write (`<br><br>-------------- <br><br>`);
document.write (`<b> Datos de Usuario modificado: </b><br>`);
infoUsuarios();




// Tarea 2:
// Crear un arreglo de objetos que contenga información de productos (por lo menos 10). 
// Los datos que debe almacenar cada objeto son:

// Nombre
// Detalle
// Stock
// Precio unitario
// Marca
// Crear una función que muestre en pantalla una lista de los productos con nombre, detalle y precio.
// Crear una función de búsqueda donde le pasemos como parámetro un termino y busque productos cuyo nombre 
// coincida en parte con el termino enviado como parámetro.