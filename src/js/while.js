
//variable iterador 

let count = 0;

while (count <=5 ) {
    console.log("count");
    count++;
    
}

//mostrar la tabla de multiplicar de un numero determinado

let cont = 1;
const tableNumber = 6;
let resultTable = `La tabla del ${tableNumber} es `


while (cont <= 10) {
    resultTable += `${tableNumber} * ${cont} = ${tableNumber} \n`;
    cont++;
}

console.log(resultTable);