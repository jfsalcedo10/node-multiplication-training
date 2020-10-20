// Required
const fs = require('fs');
const colors = require('colors');

/**
 * Otra forma es crear el modulo así
 * module.exports.crearArchivo = async ...
 */
let crearArchivo= async (base, limite = 10) => {
    return new Promise( (resolve,reject) => {
        
        if (!Number(base)) {
            reject('Base no es un número');
            return;
        }

        if (!Number(limite)) {
            reject('Límite no es un número.')
            return;
        }
        
        let data = '';
    
        for (let i = 1;  i  <= limite; i++) {
            
            data +=`${base} * ${i} = ${base*i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err) reject(err)
            else resolve(`tabla-${base}-al-${limite}.txt`);
        })
    })
}



let listarTabla = (base, limite = 10) => {
    let data = '';
    
    console.log('==============================='.green);
    console.log(`tabla de ${base}`.green);
    console.log('==============================='.green);
    for (let i = 1;  i  <= limite; i++) {
        
        data +=`${base} * ${i} = ${base*i}\n`;
    }
    console.log(data);
}

module.exports = {
    crearArchivo,
    listarTabla

}
