import moment from 'moment';

const hoy = moment();

console.log(hoy);

const fechaNacimiento = moment('1978-07-21', 'YYYY-MM-DD');

console.log(fechaNacimiento);

if (fechaNacimiento.isValid()) {
    const diferencia = hoy.diff(fechaNacimiento, 'years');
    console.log(diferencia);
}else {
    console.log('fecha no valida');
}

