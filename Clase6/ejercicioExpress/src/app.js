import express from 'express';

const app = express();

const usuarios = [
    {id: 1, nombre: 'Alex', apellido: 'Perez', edad: 28, genero: 'M'},
    {id: 2, nombre: 'Alejandro', apellido: 'Peraz', edad: 26, genero: 'M'},
    {id: 3, nombre: 'Alexa', apellido: 'Peroz', edad: 21, genero: 'f'}
];

app.get('/saludo', (req, res) => {
    res.send('Hola a todos pero ahora desde express mundo.');
});

app.get('/bienvenida', (req, res) => {
    res.send(`<h1 style="color:blue;"> Bienvenido a mi primer servidor express </h1> `)
});

app.get('/usuario', (req, res)=> {
   res.send({
        nombre: 'Nora',
        apellido: 'Saucedo',
        edad: 20,
        correo: 'ns@gamil.com'
   }) 
});

app.get('/usuario/:id', (req, res) => {
    const userId = Number(req.params.id);
    const usuario = usuarios.find(u => u.id === userId);
    res.send(usuario); 
});

app.get('/usuarios-busqueda', (req, res) => {
    const { genero, edad, nombre } = req.query;
    //console.log(genero, edad, nombre);
    res.send({genero, edad, nombre}); 
});


app.listen(8080, () => console.log('listening on port 8080'));

