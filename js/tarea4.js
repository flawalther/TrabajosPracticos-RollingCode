
 
// 9.- Escribe un programa que pida una frase y escriba las vocales que aparecen
// Nota: Tener en cuenta la función length y substring o charAt (developer mozilla)
// Ejemplo:
// input: Hola mundo
// Output: oau
let frase = prompt("Ingrese una frase: ");
let cantCaracteres = 0;
let vocales = "";

if (isNaN(frase)){
    cantCaracteres = frase.length;
    for(let i = 0; i < cantCaracteres; i++){
        switch (frase.substring(i,i+1)){
            case "a":
            case "e":
            case "i":
            case "o":
            case "u":
                vocales = vocales + frase.substring(i,i+1);
                break;
        }
    }
    if (vocales == ""){
        alert("Su frase no contiene vocales");
    }else{
        alert(`La frase contiene las siguientes vocales: ${vocales}`);}
}else {
    alert("No ingreso una frase");
}

