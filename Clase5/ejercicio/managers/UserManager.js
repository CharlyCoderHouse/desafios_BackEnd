import fs from 'fs';
import crypto from 'crypto';

export default class UserManager {

    constructor(path) {
        this.path = path;
    }

    getUsers = async () => {
        try {
            if (fs.existsSync(this.path)) {
                const data = await fs.promises.readFile(this.path, 'utf-8');
                console.log(data);
        
                const users = JSON.parse(data);
                return users;
            }else {
                return [];
            }
        } catch (error) {
            console.log(error);
        }
    }

    createUser = async (usuario) => {
        try {
            const users = await this.getUsers();

            if (users.length === 0) {
                usuario.id = 1;
            }else {
                usuario.id = users[users.length -1].id + 1;
            }

            // agregar lógica para hashear contraseña
            // 1234 secretCoder 
            usuario.salt = crypto.randomBytes(128).toString('base64');
            usuario.contrasena = crypto.createHmac('sha256', usuario.salt).update(usuario.contrasena).digest('hex');
            
            users.push(usuario);

            await fs.promises.writeFile(this.path, JSON.stringify(users, null, '\t'));
            
            return usuario;

        } catch (error) {
            console.log(error);
        }
    }

    validateUser = async (userName, password) => {
        try {
            const usuarios = await this.getUsers();
            const usuariosIndex =  usuarios.findIndex(u => u.nombreUsuario === userName);

            if (usuariosIndex === -1) {
                console.log('Error, USuario no entonctrado');
                return;
            }
            
            const usuario = usuarios[usuariosIndex];
            const newHash = crypto.createHmac('sha256', usuario.salt).update(password).digest('hex');
            
            if (newHash === usuario.contrasena) {
                console.log('Usuario logueado');
            }else {
                console.log('Contraseña Invalida');
            }

        } catch (erorr) {
            console.log(error);
        }


    }
}