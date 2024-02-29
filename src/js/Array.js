
//las llaves dan a entender que se trata de un array
//tiene un indice
let nombres = ['Juan', 'Luis', 'Maria', 'Jorge', 'Uriel'];

console.log(nombres);
//se imprimen todos los nombres
// el array muestra el total de los elementos
//al costado aparece el INDICE empezando por el 0

//recuperar el valor del indice
console.log(nombres[3]);


//agregar un nuevo elemento
nombres[5] = 'Rosa';
nombres[6] = 'German';


//agregar el valor sin saber el indice, y lo agrega al final del array en accion
nombres.push('Henry');


//saber la longitud del array
/*console.log(nombres.length);
*/

//recorrer array
for (let i = 0; i < nombres.length; i++) {
    console.log(nombres[i]);
}

//forma 2, recorre los elementos y los almacena TEMPORALMENTE en la variable nombre
nombres.forEach(function(nombres){
    console.log(nombres);
});
