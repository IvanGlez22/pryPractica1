
//Realiza la suma de un array de enteros utilizando el metodo reduceRight(), , ciclo for y for Each
const SumInt = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//reduceRight
const SumReduceRight = SumInt.reduceRight((acumulador, valorActual) => acumulador + valorActual);
console.log(SumReduceRight); 

//ciclo for
let SumArray = 0;

for(let i = 0; i < SumInt.length; i++){
    SumArray +=  SumInt[i];
}
console.log(SumArray);


//forEach
let SumForEach = 0;

SumInt.forEach(function(element){
    SumForEach += element;
});

console.log(SumForEach);


/* 2 ejercicio dado un array de numeros enteros positivos y
negativos, utilice el metodo Math.max() y el operador de progragacion (..) para encontrar el numero mayor
*/

const ArrayNums = [34, -2, 22, -500, 12, 30, 1, -54, 40, -54, 100];

const NumMax = Math.max(...ArrayNums);

console.log(`El número mayor en el array es: ${NumMax}`); 

/*Ejercicio 3 Dado un arreglo de nombres de 10 estudiantes, usar el metodo filter() para filtrar
unicamente los nombres que empiecen con una letra en especifico*/
const Letra = "R"

let ArrayAlumnos = ['Juan', 'Pedro', 'Luis', 'Ronaldo', 'Pepe', 'Ramiro']

let FilterName = ArrayAlumnos.filter(ArrayAlumnos => ArrayAlumnos.startsWith(Letra) );

console.log(`Los nombres que empiezan con la letra ${Letra} , son los siguientes: `, (FilterName)); 


/*Dad un array de numeros enteros positivos, determinar el total de numeros pares
existentes*/



let Nums = [1 ,2 ,3 ,4 ,5 ,6 ,7 ,8 ,9 ,10 ,11 ,12 ,13 ,14 ];


function NumPares(Nums) {
    let i = 0;
    for (let num of Nums) {
        if ((num % 2) === 0) {
            i++;
        }
    }
    return i;
}

let totalPares = NumPares(Nums);
console.log(`Los numeros del arreglo son los siguientes: ${Nums}, de los cuales: ${totalPares} son pares`);