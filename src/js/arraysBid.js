//Estructura de una MATRIZ !!----------------------------------------------
/*
let matrix = [
    [1, 56, 34, 23, 67], 
    [7, 85, 95, 35, 71],
    [89, 74, 65, 2, 87]
]
*/
/*
console.log(matrix[1][2]);
// Para recorrer un bucle fol con bucle for (con for loop)--------------------------------------------------
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {

        console.log(matrix[i][j]);
    }    
}
*/

/*
// Para recorrer con bucle foreach ------------------------------------
matrix.forEach((fila) =>
    fila.forEach((column) =>
    console.log(column))
);
*/

/*
//------------------- Recorrer matriz con forOF ----------
for (let fila of matrix) {
    for (let columna of fila) {
        console.log(columna)
    }   
}
*/

// ----------------------------------------- TEMA: COLECCIONES CON CLAVE --------------------------------------------------------------------
// ----------------- map y set -------------

/*
let miMapa = new Map();
///Agregar elementos al mapa
miMapa.set('clave1', 'rojo');
miMapa.set('clave2', 'negro');
miMapa.set('adress', 'Jazmines 203');
miMapa.set('clave4', 'Jazmines 203');

console.log(miMapa.get('clave4'));
*/
/*
// Para recorrer  miMap con bucle foreach ------------------------------------
//checar el orden el el q ponemos clave y element
miMapa.forEach((element, clave) =>
    console.log(${element}: ${clave})
);
*/

/*
// -------------------- recorrido con forOF ----------------------
for (let [clave, valor] of miMapa) {
    console.log(${clave}: ${valor});
}
*/

/*
// ---------------------------------------- recorrido con for y values --------------------------------------
for (let valor of miMapa.values()) {
    console.log(valor);
}
*/

/*
// ================================================== SET =========================================================================
const objSet = new Set();
objSet.add('elemento1');
objSet.add('elemento2');
objSet.add('elemento3');
objSet.add("elemento3");
*/
/*
// ------------- Recuperar valores con for Each -------
objSet.forEach(element => {
    console.log(element);
});
*/

/*
// -------------------- recorrido con forOF ----------------------
for (let element of objSet) {
    console.log(element);
}
*/


/*

// ------------------------------ ESTRUCTURA IF -------------------------------
let num = 2;
if (num == 2) {
  console.log("Son iguales");  
}

console.log("Haz llegado al final de la zentencia");

let currenDay = new Date().getDate();
const days = {
    domingo: 0,
    lunes: 1,
    martes: 2,
    miercoles: 3,
    jueves: 4,
    viernes: 5,
    sabado: 6
}

if (days.martes === currenDay){
    console.log("Hechale ganas Huerco aun no acaba la semana");
} else {
    console.log("felicidades pero a q costo !!");
}



let a = 34;
let b = 23;
let c = 5;
const arrayNumeros = [a, b, c];
const arrayOrdenado = arrayNumeros.sort((a, b) => a - b);
console.log(arrayNumeros.join(','));

// ----------------------- Estructura switch -------------------------------
let operador = '+';
switch(operador) {
    case '+': console.log("Se va a realizar una suma: "); break;
    case '-': console.log("Se va a realizar una resta: "); break;
    case '*': console.log("Se va a realizar una multiplicacion: "); break;
    case '/': console.log("Se va a realizar una divicion: "); break;
    default: console.log("Error !!");
}
*/
//--------------------------------- switch multiple -------------------------------

/*
const namefruits = "Strawberry";
switch (namefruits){
    case 'apple':
    case 'banana':
    case 'Strwberry':
        console.log(`${namefruits} is a fruit`); break;
    default: console.log("Is not fruit");
}

/*

/*
const foo = 5;
switch (foo){
    case 2: console.log(2); break;
    
}*/



// Ejercicio: desarrollar un script que imprima en orden descendente de 3 numeros dados
/*

const numero = {
    num1: parseInt(prompt("Introduce el primer numero")),
    num2: parseInt(prompt("Introduce el segundo numero")),
    num3: parseInt(prompt("Introduce el tercer numero"))
}

if((numero.num1 > numero.num2) && (numero.num1 > numero.num3)){
    if(numero.num2 > numero.num3){
        console.log(numero.num1, numero.num2, numero.num3)
    } else {
        console.log(numero.num1, numero.num3, numero.num2)
    }
} else if((numero.num2 > numero.num1) && (numero.num2 > numero.num3)){
    if(numero.num1 > numero.num3){
        console.log(numero.num2, numero.num1, numero.num3)
    } else {
        console.log(numero.num2, numero.num3, numero.num1)
    }
} else if((numero.num1 > numero.num2)){
    console.log(numero.num3, numero.num1, numero.num2)
} else {
    console.log(numero.num3, numero.num2, numero.num1) }

    */

    //validacion de switch



    //no importa en donde estèel default, el switch va a buscar en cada sentencia, a menos que no
    //tenga el switch
    const foo = 50;
    switch (foo){
        case 2: console.log(2); break;
        default: console.log("detault"); // porque no tiene el break se va a imprimir el 1
        case 1: console.log(1);
    }

    


