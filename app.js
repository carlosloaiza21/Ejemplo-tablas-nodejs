const argv = require('./config/yargs').argv
const { crearArchivo, listar } = require('./multiplicar/multiplicar') // require { } (desestructuracion)

const comando =argv._[0];

switch (comando) {
  case 'listar':
    listar(argv.base, argv.limite)
    break;
  case 'crear':
  crearArchivo(argv.base, argv.limite)
    .then((res)=>{console.log(res)})
    .catch(err=>console.log(err))
  break;
  default:
    console.log('commando no reconocido');
}


