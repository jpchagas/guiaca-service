const Sequelize = require('sequelize')
const instancia = require('../../db')

const colunas = {
    tipo:{
        type: Sequelize.ENUM('receita', 'investimento', 'gasto fixo', 'gasto variável'),
        allowNull:false
    },
    origem_destino:{
        type: Sequelize.STRING,
        allowNull:false
    },
    descricao:{
        type: Sequelize.STRING,
        allowNull:true
    },
    valor:{
        type: Sequelize.FLOAT,
        allowNull: false
    },
    data:{
        type: Sequelize.DATE,
        allowNull: false
    }

}


const opcoes = {
    freezeTableName: true,
    tableName:'registro',
    timestamps: true
}

module.exports = instancia.define('registro', colunas, opcoes)