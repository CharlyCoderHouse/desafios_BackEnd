import UserManager from './managers/UserManager.js';

const manager = new UserManager('./files/Usuarios.json');

const env = async () => {
    const usuarios = await manager.getUsers();
    console.log(usuarios);

/*     const user = {
        nombre: 'Alex',
        apellido: 'Pineda',
        nombreUsuario: 'alex',
        contrasena: '1234'
    };

    const result = await manager.createUser(user); */

    const usersResult = await manager.getUsers();
    await manager.validateUser('alex', '12345');
    console.log(usersResult);

}

env();
