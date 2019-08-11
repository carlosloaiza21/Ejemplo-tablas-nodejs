const opts = {
  base:{
    demand: true,
    alias: 'b'
  },
  limite:{
    alias: 'l',
    default: 10
  }
}
const argv = require('yargs')
  .command('listar','imprime la tabla',opts)
  .command('crear','Crea el archivo',opts)
  .help()
  .argv
  
  
  module.exports = {
    argv
  }