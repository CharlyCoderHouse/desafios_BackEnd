import express, { json, urlencoded } from "express";
import productsRouter from "../routes/products.route.js";
import baseRouter from "../routes/base.route.js"

// INICIALIZACION DEL SERVIDOR
const app = express();
app.use(json());
app.use(urlencoded({ extended: true}));

//middleware Log conexiones
app.use((req, res, next) => {
    console.log(`Nueva ${req.method} - ${req.path}`);
    next();
});


//Routes
app.use("/api/productos", productsRouter);
app.use("/", baseRouter);

//Escuchando puerto 8080 con log de errores
app.listen(8080, (error) => {
    if(error){
        console.log('Error al iniciar la APP', error);
    }else{
        console.log('Servidor escuchando el puerto 8080');
    }
})