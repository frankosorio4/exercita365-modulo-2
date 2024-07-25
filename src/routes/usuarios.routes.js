const {Router} = require('express')
const UsuariosController = require('../controllers/UsuariosController')

const UsuariosRouter = new Router()

UsuariosRouter.post('/',UsuariosController.criarConta)

module.exports = UsuariosRouter