const Modelo = require('./ModeloTabelaRegistro')

module.exports = {
    listar(){
        return Modelo.findAll()
    },
    inserir(registro){
        return Modelo.create(registro)
    }
}