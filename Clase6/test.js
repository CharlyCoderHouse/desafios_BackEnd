const Contenedor = require('./contenedor.js')
const express = require("express")

const app = express()

const PORT = process.env.PORT || 8080

const server = app.listen(PORT, ()=> {
    console.log(`Servidor prendido escuchando ${PORT}`);
})

// let products = [];

async function main() {
    
    // CREANDO INSTANCIA
    const contenedor=new Contenedor('../productos.txt')
    
    // OBTENGO TODOS LOS OBJETOS QUE HAY EN EL ARCHIVO
    let products = await contenedor.getAll()
    console.log(products);
    //RUTAS
    app.get("/", (req, res) => {
        res.send(`<h1 style="color:darkblue;">Bienvenidos al servidor express</h1> <br>
        <h2 style="color:darkblue;">Desafío de productos</h2>`)
    })
    
    app.get("/productos", (req, res) => {
        res.send(products)
    })

    app.get("/productosRandom", (req, res) => {
        let numero=Math.floor(Math.random() * 3) + 1;
        // console.log(numero);
        res.send(products[numero-1])
    })

    server.on("error", (err)=>{
        console.log(`ERROR: ${err}`);
    })


}

main()