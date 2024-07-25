const { DataTypes } = require("sequelize");
const connection = require("../database/connection");
const {hashSync} = require('bcryptjs');

const Usuario = connection.define('usuarios', {
    nome: {
        type: DataTypes.STRING(100),
    },
    sexo: {
        type: DataTypes.ENUM('Masculino', 'Feminino', 'Nao especificado'),
        allowNull: false
    },
    cpf: {
        type: DataTypes.STRING(11)
    },
    endereco: {
        type: DataTypes.TEXT
    },
    email: {
        type: DataTypes.STRING(100)
    },
    senha: {
        type: DataTypes.STRING
    },
    dataNascimento: {
        type: DataTypes.DATE
    }
})



//para hash la contrasena, esta hash sinc es sincrona
Usuario.beforeSave((usuario) =>{
    usuario.senha = hashSync(usuario.senha, 10)
    return usuario
})

module.exports = Usuario