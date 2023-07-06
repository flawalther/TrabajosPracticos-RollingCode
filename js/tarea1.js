//1.- Escribe un programa de una sola línea que haga que aparezca en la pantalla un alert que diga “un mensaje”.
alert('Buen dia!!');



//2.- Escribe un programa de una sola línea que escriba en la pantalla un texto que diga «Hello World» (document.write).
console.log('Hello World');


//3.- Escribe un programa de una sola línea que escriba en la pantalla el resultado de sumar 3 + 5.
console.log(3 + 5);


//4.- Escribe un programa de dos líneas que pida el nombre del usuario con un prompt y escriba un texto que diga «Hola nombreUsuario»
// Ejemplo: 
// input: Coder 
// Output: Hola Coder
let nombre = prompt("Ingresa tu nombre: ");
console.log(`Hola ${nombre}`);
//document.write("hola")



//5.- Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.
// Nota: Tener en cuenta la siguiente función: parseInt
// https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/parseInt
let num1 = parseInt(prompt("Ingrese un numero: "));
let num2 = parseInt(prompt("Ingrese otro numero para sumarlo al anterior: "));
console.log(num1 + num2);

//6.- Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
// Ejemplo: 
// input: 15 , 3
// Output: El 15 es el número más grande
num1 = parseInt(prompt("Ingrese un numero: "));
num2 = parseInt(prompt("Ingrese otro numero y sabremos cual es el mayor: "));
console.log(Math.max(num1, num2));


//7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
// Ejemplo: 
// input: 15 , 3, 9
// Output: El 15 es el número más grande
num1 = parseInt(prompt("Ingrese un numero: "));
num2 = parseInt(prompt("Ingrese otro numero: "));
let num3 = parseInt(prompt("Ingrese un tercer numero para saber cual es mayor: "));
console.log(Math.max(num1, num2, num3));


// 8.- Escribe un programa que pida un número y diga si es divisible por 2
// Ejemplo: 
// input: 10
// input: 15
// Output: El 10 es divisible por 2.
// Output: El 15 no es divisible por 2.
num1 = parseInt(prompt("Por favor ingrese un numero para saber si es divisible en 2: "));
if (num1 % 2 == 0){
    console.log("el numero ingresado en par");
}else{
    console.log("El numero ingresado es impar");
}



 
// 9.- Escribe un programa que pida una frase y escriba las vocales que aparecen
// Nota: Tener en cuenta la función length y substring o charAt (developer mozilla)
// Ejemplo:
// input: Hola mundo
// Output: oauo






// 10.- Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)
// Ejemplo: 
// input: 20
// Output: El 20 es divisible por 2.
num1 = parseInt(prompt("Ingrese un mumero: "));

if (num1 % 2 == 0){
    console.log("El numero es divisible en 2");
}else{
    if (num1 % 3 == 0){
        console.log("El numero es divisible en 3");
    }else{
        if (num1 % 5 == 0){
            console.log("El numero es divisible en 5");
        }else{
            if (num1 % 7 == 0){
                console.log("El numero es divisible en 7");
            }else{
                num1 = parseInt(prompt("Ingrese otro numero por favor: "));
            }
        }
    }
}




// 11.- Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)
// Ejemplo: 
// input: 20
// input: 210
// Output: El 20 es divisible por 2 y por 5.
// Output: El 210 es divisible por 2, por 3, por 5 y por 7.

num1 = parseInt(prompt("Ingrese un mumero: "));
let div2 = num1 % 2 == 0;
let div3 = num1 % 3 == 0;
let div5 = num1 % 5 == 0;
let div7 = num1 % 7 == 0;

if (div2 && div3 && div5 && div7){
    console.log("El numero es divisible en 2, 3, 5 y 7");
}else{
   if (div2 && div3 && div5){
    console.log("El numero es divisible en 2, 3 y 5");
   }else{
    if (div2 && div3 && div7){
        console.log("El numero es divisible en 2, 3 y 7");
       }else{
        if (div2 && div5 && div7){
            console.log("El numero es divisible en 2, 5 y 7");
           }else{
            if (div3 && div5 && div7){
                console.log("El numero es divisible en 3, 5 y 7");
            }else{
                if(div3 && div5){
                    console.log("El numero es divisible en 3 y 5");
                }else{
                    if (div3 && div7){
                        console.log("El numero es divisible en 3 y 7");
                    }else{
                        if (div5 && div7){
                            console.log("El numero es divisible en 5 y 7");
                        }else{
                            if (div2 && div3){
                                console.log("El numero es divisible en 2 y 3"); 
                            }else{
                                if (div2 && div5){
                                    console.log("El numero es divisible en 2 y 5");
                                }else{
                                    if (div2 && div7){
                                        console.log("El numero es divisible en 2 y 7");
                                    }else{
                                        if (div2){
                                            console.log("El numero solo es divisible en 2");
                                        }else{
                                            if (div3){
                                                console.log("El numero solo es divisible en 3");
                                            }else{
                                                if (div5){
                                                    console.log("El numero solo es divisible en 5");
                                                }else{
                                                    if (div7){
                                                        console.log("El numero solo es divisible en 7");
                                                    }
                                                }

                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            
           }
       }
   }  
}