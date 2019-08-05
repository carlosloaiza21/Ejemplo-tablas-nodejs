// require para file system
const fs = require('fs');

let crearArchivo = (base)=>{
  // la funcion retornara una promesa
  return new Promise((resolve, reject)=>{
    if(!Number(base)){
      reject('no es numero')
      return
    }
    let data= '';
    
    for(let i=1; i<= 10; i++){
      data +=`${base} * ${i} = ${base*i}\n`;
    }
    
    fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
      if (err){
        reject(err);
        return
      } else{
        resolve(`tablas/tabla-${base}.txt`)
      }
      
    });
  })
}

// agrego la funcion crearArchivo al objeto de node exports
module.exports = {
  crearArchivo
}


