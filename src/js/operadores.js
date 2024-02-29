//suma

/*
const a = 45;
const b = 23;
const result = a - b;
console.log(`la resta de ${a} - ${b} es igual a: ${result}`)



const c = 45;
const d = 23;
const result2 = a - b;
console.log(`la suma de ${c} + ${d} es igual a: ${result2}`)


const e = 45;
const f = 23;
const result3 = a * b;
console.log(`la multiplicacion de ${e} * ${f} es igual a: ${result3}`)


const g = 45;
const h = 23;
const result4 = a / b;
console.log(`la diviiòn de ${g} - ${h} es igual a: ${result4}`);
//el math round lo redondea al entero proximo
console.log(`la diviiòn de ${g} - ${h} es igual a: ${Math.round(result4)}`);
//te muestra los numeros a mostrar dependiendo los numeros despues del decimal
console.log(`la diviiòn de ${g} - ${h} es igual a: ${result4.toFixed(2)}`);

//nan not a number y entre de un entero entre 0 es igual a infinity
console.log(`Division por 0 ${0 / 0}`);


//residuo o mod
const z = 45;
const y = 23;
const result5 = a % b;
console.log(`El residuo de ${z} % ${y} es igual a: ${result5}`);

//potencia
const x = 45;
const k = 2;
const result6 = x ** k;
console.log(`Potencia de ${x} ** ${k} es igual a: ${result6}`);


*/
//INCREMENTO

/*
//si está antes de la variable incrementa y luego imprime
//si esta a la derecha primero imprime y luego suma
let a = 5;
console.log(++a);
console.log(a++);
console.log(a);

let b = 5;
console.log(b--);
console.log(b);

*/
//serie 6,4,4,6,5,5,3


/*
let c = 6;
console.log(c--);
console.log(--c);
console.log(c++);
console.log(++c);
console.log(--c);
console.log(c--);
console.log(--c);
*/

/*
let a = 6;
let b = 2;
a += b;
console.log(a);


let c = 6;
let d = 2;
c -= d;
console.log(c);


let a = 6;
let b = 2;
a /= b;
console.log(a);

let a = 6;
let b = 2;
a %= b;
console.log(a);


let a = 6;
let b = 2;
a **= b;
console.log(a);


//se puede  imprimir directo
let a = 6;
let b = 2;
console.log((a **= b));

*/

/*
//OPERADOR UNARIO ----SUMA UNARIA
//cambia el valor de un numero string a int
//aunque un numero no estè en las comillas string lo toma como numero
//a la izquierda de la variable para que la convierta a numerico
let x = 2;
let y = '1';
console.log(x + +y);

*/
//OPERADORES DE COMPARACION
//compara el valor pero no el tipo de dato
/*
let x = 5;
let y = 7;
console.log(x!=y);


let x = 5;
let y = 7;
console.log(x > y);


let x = 7;
let y = 7;
console.log(x>=y);

let x = 3;
let y = 4;
console.log(x<y);

let x = 3;
let y = 8;
console.log(x<=y);


//OPERADOR DE IDENTIDAD
//compara tipo de dato y valor del dato

//USAR OPERADOR DE IDENTIDAD
let x = 2;
let y = '3';
console.log(x === y);


let x = 4;
let y = '4';
//aca compara si el valor de x es diferente de y porque tienen el mismo valor pero diferente tipo de dato
console.log(x!==y);

*/

//OPERADOR AND
//TABLA DE VERDAD DEL OPERADOR AND
/*
F && F = F
F && V = F
V && F = F
V && V = V
SIEMPRE Y CUANDO UNO SEA FALSO ES FALSO
CUANDO AMBOS SEAN V ES VERDADERO

OPERADOR OR
TABLA DE VERDAD DE OR
F  || F = F
F  || V = V
V  || F = V
V  || V = V



const isaGirl = true;
const isaCar = true;
const isProgramer = false;


//con el ! se engloba y lo hace contrario
console.log(!(isaGirl || isProgramer));

*/


//OPERADORES BINARIOS
/*
AND, 
OR
XOR (OR EXCLUSIVO)
OPERANDO NOT 
*/

/*
let num1 = 6;
let num2 = 9;

let resultado = num1 | num2;
console.log(resultado);

//positivo lo  le resta 1
let num = 15;
let resultado = ~num;
console.log(resultado);

//resta 1 y lo hace positivo Altgr + 4 para la virgulilla
let num = -23;
let resultado = ~num;
console.log(resultado);




//desplazamiento a la derecha
//TODO EN CODIGO BINARIO
let num = 4;
console.log(num>>2);

let num2 = 7;
console.log(num2>>1);



//desplzamiento a la izquierda se añaden el numero de ceros a desplazar
//derecha eliminan
let num = 4;
console.log(num<<2);
*/


//OPERADOR COMA

//no importa el tipo de dato
//declarar e inicializar con LET o CONST
/*
let a = 23, b = "Sandra" , c = 'g' ,  aprobado = false;

let nameFruits = ['pera','apple','strawbery'];
//dos sentencias en una sola , el 4, 4 lo toma como dos logs de pantalla
console.log(nameFruits.push('eaple'), nameFruits.length);




let a = 3+4 , b = 4+4, c = 8-2;
//imprimir el valor de a 
//pero elevando al cuadrado su valor
//utilizar el operador de potencia y asignación
//mostrar el valor de b y c

console.log(a**= 2, `b=${b}`, `c=${c}`, `a=${a}` );

*/



//OPERADOR TERNARIO
//SIMPLIFICA LA IF ELSE
//SOLO DOS ALTERNATIVAS
let a = 73;
let b = 30;

// condicion ? -- si--- si no 
let result = a > b ? `${a} es mayor que ${b} ` : `${a} es menor que ${b}`;
console.log(result);



