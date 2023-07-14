// Operadores para objetos

const objeto1 = {
    propiedad1: 2,
    propiedad2: 'b',
    propiedad3: true
};

const objeto2 = {
    propiedad1: 'c',
    propiedad2: [1,2,3,4]
};

const objetoResultante = {
    ...objeto1, ...objeto2
};

console.log(objetoResultante);

const objeto3 = {
    a: 1,
    b: 2,
    c: 3
};

/* const a = objeto3.a;
const b = objeto3.b;
const c = objeto3.c;
 */ // es lo mismo que abajo
// const { a, b, c } = objeto3;

const { a, b, ...rest } = objeto3

console.log(a);
console.log(rest);