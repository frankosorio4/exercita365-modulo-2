
const { Router } = require('express')

const usuariosRoutes = require('./usuarios.routes')
const LoginController = require('../controllers/LoginController')

const routes = new Router()

routes.use('/usuario', usuariosRoutes)
routes.post('/login', LoginController.login)

module.exports = routes