// En un establecimiento de juegos existen cuatro salas: Arcade, Consolas, Rol, Realidad Virtual. 
// Si un usuario paga  4 créditos puede acceder a todas, si paga 3 solo podrá acceder a las tres primeras, 
// si paga 2 a las dos primeras y si paga 1 solo a la primera sala

let creditos = parseInt(prompt("Disponemos de 4 salas de juegos.\nDependiendo de la cantidad de creditos que abone será la cantidad de salas a las que acceda.\n\nCuantas salas desea pagar?: "));

switch (creditos){
    case 1: 
        console.log("Usted tiene acceso a la sala Arcade");
        break;

    case 2:
        console.log("Usted tiene acceso a las salas: Arcade, Consolas");
        break;

    case 3:
        console.log("Usted tiene acceso a las salas: Arcade, Consolas, Rol");
        break;

    case 4:
        console.log("Usted tiene acceso a las salas: Arcade, Consolas, Rol, Realidad Virtual.");
        break;

    default:
        console.log("No ingreso un numero valido");
    break;   
}


