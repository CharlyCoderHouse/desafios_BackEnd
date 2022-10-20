class Contador {
    static contadorGlobal = 0 

    constructor (nombre, count){
        this.nombre = nombre;
        this.contadorIndividual = 0
    }
    obtenerResponsable() {
        return console.log(`El nombre del responsable es ${this.nombre}`)
    }

    obtenerCuentaIndividual() {
        return console.log(`Cuenta individul de  ${this.nombre} : ${this.contadorIndividual}`)
    }

    obtenerCuentaGlobal() {
        return console.log(`Cuenta global  ${this.nombre} : ${this.contadorGlobal}`)
    }

    contar() {
        this.contadorIndividual = this.contadorIndividual + 1
        this.constructor.contadorGlobal = this.constructor.contadorGlobal + 1
    }
}

const contador1 = new Contador ('Franco')
const contador2 = new Contador ('Agustin')

contador1.contar()
contador2.contar()

console.log(` ${contador1.nombre} : ${contador1.contadorIndividual}`);
console.log(` ${contador2.nombre} : ${contador2.contadorIndividual}`);
console.log(Contador.contadorGlobal);