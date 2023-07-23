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

let productos = [
    {
        Nombre: "faja pampa",
        Detalle: "faja tejida",
        Stock: 5,
        PrecioUnitario: 300,
        Marca: "Pampero",
    },
    {
        Nombre: "bombacha gaucha",
        Detalle: "bombacha de gabardina pinzada para adultos",
        Stock: 10,
        PrecioUnitario: 5000,
        Marca: "Ombu",
    },
    {
        Nombre: "camisa fila",
        Detalle: "camisa de grafa beige",
        Stock: 20,
        PrecioUnitario: 4500,
        Marca: "Ombu",
    },
    {
        Nombre: "camisa fauna",
        Detalle: "camisa de grafa negra",
        Stock: 35,
        PrecioUnitario: 4500,
        Marca: "Ombu",
    },    
    {
        Nombre: "sombrero retobado",
        Detalle: "sombrero gaucho norteño de paño",
        Stock: 8,
        PrecioUnitario: 15000,
        Marca: "Sombreros Cruz",
    },    
    {
        Nombre: "sombrero paisana",
        Detalle: "sombrero para gaucho y paisana de paño",
        Stock: 7,
        PrecioUnitario: 14000,
        Marca: "Sombreros Cruz",
    },    
    {
        Nombre: "bombacha gauchito",
        Detalle: "bombacha de gabardina pinzada para niños",
        Stock: 7,
        PrecioUnitario: 4000,
        Marca: "Ombu",
    },    
    {
        Nombre: "poncho",
        Detalle: "poncho de lana de oveja de hilado artesanal",
        Stock: 25,
        PrecioUnitario: 25000,
        Marca: "El Boyero",
    },    
    {
        Nombre: "pañuelo",
        Detalle: "pañuelo de cuello de 80x80",
        Stock: 40,
        PrecioUnitario: 2000,
        Marca: "Pampero",
    },    
    {
        Nombre: "boina",
        Detalle: "boina tradicional gaucha de algodon",
        Stock: 34,
        PrecioUnitario: 5500,
        Marca: "El Boyero",
    },
];

document.write(`<strong>Listado de Productos </strong><br><br>`);

productos.forEach((producto) => {
    document.write (`producto: ${producto.Nombre} <br> detalle: ${producto.Detalle} <br> precio: $${producto.PrecioUnitario} <br><br>`);
});


const mostrarProductosFiltrados = (dato) => {

    let productoFiltrado = productos.filter((info) => {
        return info.Nombre.toLowerCase().includes(dato.toLowerCase());
    });
   
      return productoFiltrado;
};