// require para file system
const fs = require('fs');
const colors = require('colors')

let crearArchivo = (base, limite)=>{
  // la funcion retornara una promesa
  return new Promise((resolve, reject)=>{
    if(!Number(base) && !Number(limite)){
      reject('Algun parametro no es numero')
      return
    }
    let data= '';
    for(let i=1; i<= limite; i++){
      data +=`${base} * ${i} = ${base*i}\n`;
    }
    
    fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
      if (err){
        reject(err);
        return
      } else{
        resolve(`tablas/tabla-${base}.txt`.green)
      }
      
    });
  })
}

let listar = (base, limite)=>{
  let data='';
  for(let i=1;i<=limite;i++){
    console.log(`${base} * ${i} = ${base*i}`);
  }
}

// agrego la funcion crearArchivo al objeto de node exports
module.exports = {
  crearArchivo,
  listar
}


