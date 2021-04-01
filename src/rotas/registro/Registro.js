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
        this.validar()
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

    async carregar(){
        const encontrado = await TabelaRegistro.pegarPorId(this.id)
        this.tipo = encontrado.tipo
        this.origem_destino = encontrado.origem_destino
        this.descricao = encontrado.descricao
        this.valor = encontrado.valor
        this.data = encontrado.data
        this.createdAt = encontrado.createdAt
        this.updatedAt = encontrado.updatedAt
        
    }

    async atualizar(){
        await TabelaRegistro.pegarPorId(this.id)
        const campos = ['tipo','origem_destino', 'descricao','valor', 'data']
        const dadosParaAtualizar = {}

        campos.forEach((campo)=>{
            const valor = this[campo]
            
            /*
            TODO: Corrigir validações dos dados de entrada de atualização
            */ 
           
           // if(valor.length > 0){
                dadosParaAtualizar[campo] = valor
            //}
        })

        if(Object.keys(dadosParaAtualizar).length == 0){
            throw new Error('Não foram fornecidos para para atualizar!')
        }
        await TabelaRegistro.atualizar(this.id, dadosParaAtualizar)
    }

    remover(){
        return TabelaRegistro.remover(this.id)
    }

    validar(){
        const campos = ['tipo', 'origem_destino','descricao','valor','data']

        campos.forEach(campo=>{
            const valor = this[campo]
            /*if (typeof valor !== 'string' || valor.length===0){
                throw new Error(`O campo ' ${campo} 'está inválido`)
            }*/
        })
    }

}

module.exports = Registro