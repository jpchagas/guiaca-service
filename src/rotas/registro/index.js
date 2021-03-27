const { Router } = require('express')

const roteador = require('express').Router()

const TabelaRegistro = require('./TabelaRegistro')

roteador.use('/', async (req,res)=>{
    const resultados = await TabelaRegistro.listar()
    res.send(
        JSON.stringify(resultados)
    )
})

module.exports = roteador