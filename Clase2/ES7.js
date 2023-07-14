//Exponencial
const valoresBase = [1,2,3,4,5,6];

// Operador Map
// Arreglo de entrada => Arreglo de salida nuevo

const nuevosValores = valoresBase.map((numero, indice) => numero**indice);

console.log(nuevosValores);

//Includes
const nombres = ['Alex', 'Mayra', 'Federico', 'Maria', 'Lucas'];

if (nombres.includes('Maraia')) {
    console.log('Tenemos el elemento');
}else {
    console.log('No tenemos el elemento');
}