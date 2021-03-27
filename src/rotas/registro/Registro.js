const TabelaRegistro = require('./TabelaRegistro')

class Registro{
    constructor({id, tipo, origem_destino, descricao, valor, data, createdAt, updatedAt}){
        this.id = id
        this.tipo = tipo
        this. origem_destino = origem_destino
        this.descricao = descricao
        this.valor = valor
        this.data = data
        this.createdAt = createdAt
        this.updatedAt = updatedAt
        
    }

   async criar(){
        const resultado = await TabelaRegistro.inserir({
            tipo: this.tipo,
            origem_destino: this. origem_destino,
            descricao: this.descricao,
            valor: this.valor,
            data: this.data 
        })
        
        this.id= resultado.id
        this.createdAt = resultado.createdAt
        this.updatedAt = resultado.updatedAt
    }

}

module.exports = Registro