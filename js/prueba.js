num1 = parseInt(prompt("Ingrese un lado del rectangulo"));
num2 = parseInt(prompt("Ingrese el otro lado del rectangulo"));

const suma = function (num1, num2) {
    let perimetro = 2*(num1+num2);
    alert(`El perimetro del rectangulo es: ${perimetro}`);
}

suma(num1,num2);