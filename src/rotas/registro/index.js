const { Router } = require('express')

const roteador = require('express').Router()

const TabelaRegistro = require('./TabelaRegistro')
const Registro = require('./Registro')

roteador.get('/', async (req,res)=>{
    const resultados = await TabelaRegistro.listar()
    res.send(
        JSON.stringify(resultados)
    )
})

roteador.post('/', async (req,res)=>{
    const dadosRecebidos = req.body
    const registro = new Registro(dadosRecebidos)
    await registro.criar()
    res.send(
        JSON.stringify(registro)
    )
})

module.exports = roteador