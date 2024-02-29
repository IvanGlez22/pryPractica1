
//mandar mensajes

// si el script tiene alert y prompt del lado del navegador, del lado del servidor dara error

//console.log("Soy un mensaje independiente");
//alert("Soy un script independiente");



//pedir nombre con el comando prompt
//let nombre = prompt("Introduce tu nombre");

//console.log("Tu nombre es: ",nombre);

/*
let a=5
let b=10
let c=20



const location1         =           "New York,"         +       "NY";
const location2= "New York,"+"NY";
const location3=    "New York,"     +"NY";


console.log(location1);
console.log(location2);
console.log(location3);

*/

//es imporante dejar espacios entre los caracteres



//comentarios antes de cada sentencia
/*
*/
/*
let edad = 15;
let nombre = "Ivan Gonzalez";

console.log(edad);
*/


//scope de var tiene ambito de funcion pero no de bloque 
//var tiene un alcance mayor

//let de bloque

/*function LetTest(){
    let x = 31;
    //bloque if
    if(true){
        let x = 56;
        console.log(x);
    }
    console.log(x);
    }

    LetTest();


*/

//con var busca en todo el codigo donde esta la variable declarada, y lo manda al inicio sin valor
//en cambio con let no  

/*console.log(x);
var x=34;*/

/*
//VAR tiene ambito de funcion, es visible en toda la funcion
function EjemploVAmbitoVar(){
    if(true){
        var x = 23;
    }
    console.log(x);
}

EjemploVAmbitoVar();

*/
/*
function EjemploVAmbitoVar(){
    if(true){
        let x = 23;
        console.log(x);
    }
    
}

EjemploVAmbitoVar();

*/

/*
const v = 6;

function constEjemplo(){
    const v = 5;
    if(true){
        const v = 70;
        console.log(v);
    }
    console.log(v);
}
console.log(v);

constEjemplo();

*/

//declarar dos variables, al tener alert se ejecuta en el navegador  

/*let admin; 

let nameUser;

nameUser = "John";

admin = nameUser;

alert(admin);

*/

//pedir datos al usuario en el navegador e imprimir en consola


/*
let nombre = prompt("Introduce tu nombre");

let edad = prompt("Introduce tu edad");


console.log("Tu nombre es: ",nombre);

console.log("Tu edad es: ", edad);
*/

/*
//ejercicios capsiosos 
let OurPlanetName;
OurPlanetName = "Tierra";


let Current_user_name; 

*/


/*
let age = 19; 
let base = 4.5;
let distanciaTierra_sol = 345555555;
let name = "Dalila Emmanuel";
let gender = 'X';
let aprobado = "false";
let weight = undefined;
height = null;
resultFunction = function enviar(){};
let symbol='a';
let objPersona = {
    nombre: "ivan",
    apellidos: "Gonzaález",
};
//punto y coma despues de los objetos

//array
let arrayFruitsName = ["pera", "manzana", "mandarina"];


//console.log(arrayFruits);

//comillas francesas
console.log(`name:${typeof name}`);


//tipos de comillas
let nameUser = "dobles comillas";
let nameAdmin = 'ejemplo: "juan pedro" ';
//para meter comillas dobles dentro de una cadena y marcarlo como texto

//se pueden meter variables 
console.log(`esta es una comilla francesa: ${nameUser} mas texto ${nameAdmin}`);
console.log('francesa: ', nameAdmin);
console.log('francesa:'+ nameUser);


let name2 = "Ilya";

alert(`hello ${1}` ); //?

alert( `hello ${"name"} `);

alert(`hello ${name2}`);
*/

/*
const date = new Date();

let nameUser = prompt("Ingresa tu nombre");
let numControl = prompt("Ingresa tu numero de control: ");
let birthday = prompt("Ingresa tu año de nacimiento: ");


const age = date.getFullYear() - birthday;

console.log(`los datos del alumno son: \n
nombre: ${nameUser}
numero de control ${numControl} \n 
edad: ${age}`);

*/


//calcular el perimetro de un rectangulo

/*

const weight = prompt("Ingresa el ancho del reptangulo: ");
const height = prompt("Ingresa la altura del reptangulo");


const perimetroRectngle = (2 * weight + 2 *height);

console.log('El perimetro es: '+perimetroRectngle);

console.log('El año de nacimiento es: ', birthDay());
*/



//const gender = 'Masculino';
//console.log(gender.charAt(0));

/*
let gender = prompt("Ingresa tu genero: ").charAt(0);
console.log(gender);

*/

//clave: valor datos JSON


/*
let jsonString = '{"Marca": "LG","Modelo":"Zplus","Ram":12,"Procesador":"SnapDragon 8200"}';
let cadenaNoparseada = jsonString;
console.log(`Cadena no parseada:${cadenaNoparseada}`);

let StringParseado = JSON.parse(jsonString);
console.log(`cadena parseada:${StringParseado}`);
//

*/

