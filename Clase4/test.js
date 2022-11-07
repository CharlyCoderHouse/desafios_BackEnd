const Contenedor = require('./contenedor.js')

const item1 = {
    title: 'Escuadra',
    price: 123.45,
    thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png',                                     
    id: 1                                                                                                                                              
}

const item2 = {
    title: 'Calculadora',
    price: 123.45,
    thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png',                                     
    id: 2                                                                                                                                              
}

const item3 = {
    title: 'Globo Terráqueo',
    price: 123.45,
    thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png',                                     
    id: 3                                                                                                                                              
}

// producto repetido en el nombre para probar los metodos
const item4 = {
    title: 'Escuadra',
    price: 123.45,
    thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png',                                     
    id: 1                                                                                                                                              
}

async function main() {
    
    // CREANDO INSTANCIA
    const contenedor=new Contenedor('./productos.txt')
    
    // OBTENGO TODOS LOS OBJETOS QUE HAY EN EL ARCHIVO
    let datos = await contenedor.getAll()
    console.log(datos);

    // AGREGO OBJETO ITEM1
    let id1 = await contenedor.save(item1)
    datos ? console.log("Agregado el producto con id: " + id1) : console.log("no pude agregar el item1");

    // AGREGO OBJETO ITEM2
    let id2 = await contenedor.save(item2)
    datos ? console.log("Agregado el producto con id: " + id2) : console.log("no pude agregar el item2");
    
    // MUESTRO LOS OBJETOS
    let datosNew = await contenedor.getAll()
    console.log("Estos son los productos:\n",datosNew);

    // buscar por OBJETO id 1
    let busca1 = await contenedor.getById(1)
    busca1 ? console.log("Encontre el producto con ID:\n", busca1) : console.log("No encontre el id 1");
    
    // buscar por OBJETO id 10 que no existe
    let busca2 = await contenedor.getById(15)
    busca2 ? console.log("Encontre el producto con ID:\n", busca2) : console.log("No encontre el id 15");

    // no lo debe agregar porque ya existe
    let id4 = await contenedor.save(item4)
    id4 ? console.log("Agregado el producto con ID: " + id4) : console.log("No pude agregar el item4 porque ya existe");

    // borrar el id 1 - queda un solo elemento
    await contenedor.deleteById(1)
    let datosNewDel = await contenedor.getAll()
    console.log("Nuevo archivo sin el objeto eliminado\n",datosNewDel);    

    // borrar todo
    await contenedor.deleteAll()
    let datosDeleted = await contenedor.getAll()
    console.log("Elimine todos los objetos del archivo",datosDeleted);    

}

main()