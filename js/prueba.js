// 4- Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades código,
//  nombre y precio, además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.
// Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
// Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos 
// instanciados.

let almacena = [{
    cod: 0,
    nom: "",
    prec: 0,}
]

class Producto{
    constructor(codigo1, nombre1, precio1){
        this.codigo = codigo1;
        this.nombre = nombre1;
        this.precio = precio1;
    }


    ImprimeDatos(productito){

        almacena.push (productito);

        for (let i = 1; i <= almacena.length; i++) {
            document.write(`Codigo: ${almacena[i].codigo}, Articulo: ${almacena[i].nombre}, Precio: ${almacena[i].precio} <br><br>`);
            
        }

     }
}





// let usuarios = {
//     username: "Flavia",
//     state: true,
//     role: "administrador",
//     cambiarEstado: function(){
//         return this.state = !this.state
//     }
//     mostrarDato: function(){
//         for (const propiedad in this){
//             console.log (propiedad); // devuelve username
//             if (propiedad != "cambiarEstado" && propiedad != "mostrarDato")
//                 console.log (`${propiedad}: ${this[propiedad]}`) // devuelve username: Flavia
//         }
//     }
// }



// 5- Crea una clase llamada Persona que siga las siguientes condiciones:
// Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. 
// Si quieres añadir alguna propiedad extra puedes hacerlo.
// Los métodos que se debe poder utilizar  son:
// mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona 
// creada y cual es el rasgo característico de esta generación.
// Para realizar este método tener en cuenta la siguiente tabla de generaciones:


class Persona{
    constructor(nombre,edad,dni,sexo,peso,altura,nacimiento){
        this.nombre = nombre; 
        this.edad = edad; 
        this.DNI = dni;
        this.sexo = sexo; 
        this.peso = peso;
        this.altura = altura; 
        this.nacimiento = nacimiento;
    }

    Generacion(){
        if (this.nacimiento >= 1930 && this.nacimiento<= 1948) {
            console.log ("Pertenece a la Silent Generation, caracterizado por la Austeridad")
        } else if  (this.nacimiento >= 1949 && this.nacimiento<= 1968){
            console.log ("Pertenece a la generacion Baby Boom, caracterizado por la Ambición")
        } else if (this.nacimiento >= 1969 && this.nacimiento<= 1980){
            console.log ("Pertenece a la generacion X, caracterizado por la Obseción por el exito")
        } else if  (this.nacimiento >= 1981 && this.nacimiento<= 1993){
            console.log ("Pertenece a la generacion Y, caracterizado por la Frustación")
        } else {
            console.log ("Pertenece a la generacion Z, caracterizado por la Irreverencia")
        }
    }


}
