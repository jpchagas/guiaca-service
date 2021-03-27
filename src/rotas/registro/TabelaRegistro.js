const Modelo = require('./ModeloTabelaRegistro')

module.exports = {
    listar(){
        return Modelo.findAll()
    }
}