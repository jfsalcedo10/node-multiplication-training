const opts = {
    base: {
        alias: 'b',
        demand: true
        
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
.command('crear','Guarda un archivo con la tabla de multiplicar para base y limites inputados.',opts)
.command('listar','imprime en cosola la tabla de multiplicar',opts)
.help()
.argv;

module.exports = {
    argv
}