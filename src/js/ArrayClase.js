/*const nameStudents = ['Dalila', 'Emanuel', 'Francisco', 'Gael'];
//arrays
const number = [12,45,34,78];


//imprimir
console.log(nameStudents);

//guardar cualquier tipo de dato en el array
const mergeType = ["Pedro", {nombre: 'Hugo'},
 function(){console.log("Hola")}, true, {clave: 'valor'},];

console.log(mergeType[2]);
//console.log(mergeType[2]());
*/


//array vacio

//const array1 = new Array();
//const array2 = [];

//const FruitNames = ['Papaya', 'Sandia', 'Pera', 'Manzana', 'Naranja', 'Mango', 'Piña']
/*
console.log(FruitNames[0]);
console.log(FruitNames[1]);
console.log(FruitNames[2]);
console.log(FruitNames[3]);
console.log(FruitNames[4]);
console.log(FruitNames[5]);
*/
//FruitNames[2] = 'Naranja';


//FruitNames.push('Guanaba');


//console.log(FruitNames);

//modificacion de datos arriba

/*
for (let i = 0; i < FruitNames.length; i++) {
    console.log(FruitNames[i]);
}
*/


/*
//for each
FruitNames.forEach(function(elemento){
    console.log(elemento);
});

*/

//for each con funcion arrow en una linea de codigo


//FruitNames.forEach((element) => console.log(element))

/*
//POP ELIMINA EL ULTIMO NOMBRE DEL ARRAY
const ultimaFruta = FruitNames.pop();

console.log(ultimaFruta);
console.log(FruitNames);
*/


//SHIFT elimina el primer elemento del arrayy y devueve ese elemento
/*
const primeraFruta = FruitNames.shift();
console.log(primeraFruta);
console.log(FruitNames);
*/


/*
//UNSHIFT añade uno o mas elementos al principio del array y devuelve la nueva longitud

FruitNames.unshift('platano', 'uva');
console.log(FruitNames);
*/

//INDEXOF(ELEMENTO) devuelve el indice del primer elmento encontrado, si no está devuelve 
//-1

/*
const indice = FruitNames.indexOf('Pera');
console.log(indice);
*/

//SPLICE cambia el contenido de un array eliminando elementos ya existentes y/o agregando nuevos
//elementos en su lugar


//si no existe los añade 

//el segundo numero indica cuantos elementos cambiará a partir de ahi
/*
FruitNames.splice(1, 2, 'uva', 'pera');
console.log(FruitNames);

*/

/*
//SLICE devuelve una copia de una porcion del array
const frutas =['manzana', 'uva', 'pera', 'naranja'];
const nuevaLista = frutas.slice(1,3);
console.log(nuevaLista);
*/

//ORDENA DE MENOR A MAYOR

/*const frutas =[4, 2, 8, 1, 5];

frutas.sort((a, b) => a - b);

console.log(frutas);
*/
//de mayor a menor
const frutas =[4, 2, 8, 1, 5];

frutas.sort((a, b) => b - a);

console.log(frutas);

