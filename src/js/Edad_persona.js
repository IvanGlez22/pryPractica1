//realizar un script que solicite el año de nacimiento de una persona
//y determine si es mayor de edad o caso contrario menor de edad,
//utilizando el comando prompt del navegador
//mensaje alert a nivel usuario 

/*
const date = new Date();
date.getFullYear;

let anio_nac = prompt("Introduce tu año de nacimiento")


const age = date.getFullYear() - anio_nac;


//si el valor cambiara se usa LET y CONST si es que no va a cambiar
let agePerson = age >= 18 ? alert(`Tienes ${age} años, eres MAYOR de edad`) : alert(`Tienes ${age} años, eres MENOR de edad`)



const a = 32;
const b = 23;

console.log( a >= b ? 'a es mayor que b' : ' b es mayor que a')




//typof number o sin asignar es undefined
const a = 32;
const b = 23;

console.log(typeof a);



//operador nullish coalescing
//valor de respaldo
//verifica el valor de una variable con otra


let a = null;
let b = 23;

console.log(a ?? b);
*/

//objetos

/*

let clientData = {
    nameCliente: 'Dalila',
    born: 2004,
    adress: null,
    phoneNumber: '9515679412',
};




let clientDataFinal = {
    nameCliente: clientData.nameCliente ?? 'Demetrio',
    born: clientData.born ?? 2000,
    adress: clientData.adress ?? 'Domicilio conocido',
    phoneNumber: clientData.phoneNumber ?? '951000000',
};



console.log(clientDataFinal);

//3 validaciones
// born: 2004, //no es "", no es null, no es undefined

//NULLISH COALESCING Y TERNARIO
/*
let clientDataFinal = {
    nameCliente: clientData.nameCliente ?? 'Demetrio',
    born: clientData.born !== '' && clientData.born !==null && clientData.born !== undefined
    ? clientData.born : 2000,
    adress: clientData.adress ?? 'Domicilio conocido',
    phoneNumber: clientData.phoneNumber ?? '951000000',
};
*/










