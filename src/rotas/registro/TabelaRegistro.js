const Modelo = require('./ModeloTabelaRegistro')

module.exports = {
    listar(){
        return Modelo.findAll()
    },
    inserir(registro){
        return Modelo.create(registro)
    },
    async pegarPorId(id){
        const encontrado = await Modelo.findOne({
            where :{
                id:id
            }
        })
        if(!encontrado){
            throw new Error('Registro não encontrado')
        }
        return encontrado
    },
    atualizar(id, dadosParaAtualizar){
        return Modelo.update(
            dadosParaAtualizar,
            {
                where:{
                    id:id
                }
            }
        )

    },

    remover(id ){
        Modelo.destroy({
            where:{
                id:id
            }
        })
    }

}