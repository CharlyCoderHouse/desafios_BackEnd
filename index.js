/* function mostrarLista (datos = []){
    if (datos.length < 1) {
        console.log('lista vacia');
    }
}

mostrarLista([]) */

/* (function mostrarLista (datos = []){
    if (datos.length < 1) {
        console.log('lista vacia');
        return
    }
    console.table(datos)
})([1,2])
 */

const crearMultiplicador = (numero) => {
    //console.log(numero);
    return function(m) {
        console.log(m*numero);
    }
}

const triplicar = crearMultiplicador(3)
const duplicar = crearMultiplicador(2)

triplicar(9)
duplicar(100)