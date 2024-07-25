const {Router} = require('express')
const Usuario = require('../models/Usuario')
const UsuariosController = require('../controllers/UsuariosController')

const UsuariosRouter = new Router()

UsuariosRouter.post('/',UsuariosController.criarConta)

module.exports = UsuariosRouter