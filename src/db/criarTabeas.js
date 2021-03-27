const ModeloTabela = require('../rotas/registro/ModeloTabelaRegistro')

ModeloTabela
    .sync()
    .then(()=> console.log('Tabela criada com sucessso'))
    .catch(console.log)