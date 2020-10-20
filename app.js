const {crearArchivo, listarTabla} = require('./multiplicar/multiplicar');
const colors = require('colors');
const argv = require('./config/yargs').argv;

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
        break;
    case 'crear':
        crearArchivo(argv.base)
        .then( archivo => console.log('Archivo creado: ', colors.green(archivo)))
        .catch(e => console.log(e));
        break;
    default:
        console.log('Comando no reconocido.');
        break;
}


