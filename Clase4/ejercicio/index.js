import UserManager from './managers/UserManager.js';

const manager = new UserManager('./files/Usuarios.json');

const env = async () => {
    const usuarios = await manager.getUsers();
    console.log(usuarios);

    const user = {
        nombre: 'Alex',
        apellido: 'Pineda',
        edad: 28,
        curso: 'Backend'
    };

    const result = await manager.createUser(user);

    const usersResult = await manager.getUsers();
    console.log(usersResult);

}

env();
