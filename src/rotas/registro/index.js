const { Router } = require('express')

const roteador = require('express').Router()

const TabelaRegistro = require('./TabelaRegistro')
const Registro = require('./Registro')

roteador.get('/', async (req,res)=>{
    const resultados = await TabelaRegistro.listar()
    res.status(200)
    res.send(
        JSON.stringify(resultados)
    )
})

roteador.post('/', async (req,res)=>{
    try{
        const dadosRecebidos = req.body
        const registro = new Registro(dadosRecebidos)
        await registro.criar()
        res.status(201)
        res.send(
            JSON.stringify(registro)
        )
    }catch(console){
        res.status(400)
        res.send(
            JSON.stringify({
                mensagem:erro.message
            })
        )
    }
    
})

roteador.get('/:idRegistro', async (req,res)=>{

    try{
        const id = req.params.idRegistro
    const registro = new Registro({id:id})
    await registro.carregar()
    res.status(200)
    res.send(
        JSON.stringify(registro)
    )
    }catch(erro){
        res.status(404)
        res.send(
            JSON.stringify({
                mensagem:erro.message
            })
        )
    }
})

roteador.put('/:idRegistro', async (req, res)=>{
    
    try{
        const id = req.params.idRegistro
    const dadosRecebidos = req.body
    const dados = Object.assign({},dadosRecebidos, {id: id})
    const registro = new Registro(dados)
    await registro.atualizar()
    res.status(204)
    res.end()
    }catch(erro){
        res.status(400)
        res.send(
            JSON.stringify({
                mensagem:erro.message
            })
        )
    }

})

roteador.delete('/:idRegistro', async (req,res)=>{
    try{
        const id = req.params.idRegistro
        const registro = new Registro({id:id})
        await registro.carregar()
        await registro.remover()
        res.status(204)
        res.end()
    }catch(error){
        res.status(404)
        res.send(
            JSON.stringify({
                mensagem:erro.message
            })
        )
    }
})

module.exports = roteador