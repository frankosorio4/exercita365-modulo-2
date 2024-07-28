const { DataTypes } = require("sequelize");
const connection = require("../database/connection");
const { hashSync } = require('bcryptjs');

const Usuario = connection.define('locais', {
    nomeLocal: {
        type: DataTypes.STRING(100),
    },
    usuarioId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'usuarios',
            key: 'id'
        }
    },
    descricao: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    cep: {
        type: DataTypes.STRING(8),
        allowNull: false
    },
    numeroLocal: {
        type: DataTypes.STRING(10)
    },
    latitude: {
        type: DataTypes.STRING(12),
        allowNull: false
    },
    longitude: {
        type: DataTypes.STRING(13),
        allowNull: false
    },
    logradouro: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    bairro: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    cidade: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    estado: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    linkGoogleMaps: {
        type: DataTypes.STRING,
        allowNull: false
    }
},
{
     paranoid: true //  Habilita soft delete
})

module.exports = Usuario