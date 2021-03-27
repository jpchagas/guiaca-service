const express = require('express')
const bodyParser = require('body-parser')
const config = require('config')
const roteador = require('./rotas/registro')

const app =  express()

app.use(bodyParser.json())

app.use('/registro',  roteador)

app.listen(config.get('api.porta'), ()=>{
    console.log("API Working!!")
})