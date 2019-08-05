const { crearArchivo } = require('./multiplicar/multiplicar') // require { } (desestructuracion)

const argv = require('yargs')
  .command('listar','listado',{
    base:{
      demand: true,
      alias: 'b'
    },
    limite:{
      default: 10
    }
  }).command('crear','carlos',()=>console.log('sii'))
  .help()
  .argv


console.log(argv.base);
console.log(argv.limite);



// crearArchivo(base)
//   .then((res)=>{console.log(res)})
//   .catch(err=>console.log(err))
