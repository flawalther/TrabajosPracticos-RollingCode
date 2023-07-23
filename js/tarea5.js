// Prácticas con arreglos y funciones

// Arrays---------------------


// 1- Crear un array llamado meses y que almacene el nombre de los doce meses del año. 
// Mostrar por pantalla en forma de lista los doce nombres del arreglo.

// Output: lista de meses: enero, feb, mar...







// 2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

// Mostrar la longitud del arreglo.
// Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
// Añade en última posición la ciudad de París.
// Escribe por pantalla el elemento que ocupa la segunda posición.
// Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.





// 3- Escribir un script que simule el lanzamiento de dos dados. 
// Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los 
// lanzamientos de los dados. Sumar el resultado de lanzar dos dados y anotar en un array el número de 
// apariciones de dicha suma, repitiendo 50 veces esta operación.







// Funciones-----------------------------

// 4- Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve 
// como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el 
// resultado devuelto por la función.

const numerito = function (num){
    if (num % 2 == 0){
        alert(`el num es par`);
    }else{
        alert(`el num es impar`); 
    }
}


// 5- Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. 
// A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, 
// sólo por minúsculas o por una mezcla de ambas.

const cadena = function (texto){

    if (texto == texto.toUpperCase()){
        alert("El texto ingresado esta en mayusculas");
    }else if (texto == texto.toLowerCase()){
        alert("El texto ingresado esta en minusculas");
    }else{
        alert("El texto ingresado tiene mayusculas y minusculas");
    }

}



// 6- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una
//  función para calcular su perímetro y mostrarlo por pantalla.

// La fórmula del perímetro  es p = 2*(a +b)

// Ejemplo:
// Input:
// lado A = 24
// lado B = 5

// Output: 58

num1 = Number(prompt("Ingrese un lado del rectangulo"));
num2 = Number(prompt("Ingrese el otro lado del rectangulo"));

const suma = function (n1, n2) {
    let perimetro = 2*(n1+n2);
    alert(`El perimetro del rectangulo es: ${perimetro}`);
}

suma(num1,num2);


// 7- Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, la creación 
// de la tabla debe ser realizada con una función y mostrar solo los resultados del 1 al 10 del número elegido 
// por el usuario.

let numero = parseInt(prompt("Ingrese un numero para mostrar su tabla de multiplicar: "));

const tabla = function (numero){

    for (let i=1; i<=10; i++){
        multi = numero * i;
        console.log(` ${numero} x ${i} = ${multi} `);
    }
}

if (numero){
    tabla(numero);
}else{
    alert("no ingreso un numero"); 
}
