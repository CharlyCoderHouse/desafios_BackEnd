import fs from 'fs';

const operacionesArchivosAsincrona = async() => {
    try {
        await fs.promises.writeFile('./fs-promesas.txt', 'Hola Mundo desde promesas');

        let resultado = await fs.promises.readFile('./fs-promesas.txt', 'utf-8');

        console.log(resultado);

        await fs.promises.appendFile('./fs-promesas.txt', '\nMás contenido');

        resultado = await fs.promises.readFile('./fs-promesas.txt', 'utf-8');
        console.log(resultado);

        await fs.promises.unlink('./fs-promesas.txt')

    }catch (error){
        console.log(error);
    }
    
}

operacionesArchivosAsincrona();