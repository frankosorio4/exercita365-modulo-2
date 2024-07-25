
const { Router } = require('express')

const usuariosRoutes = require('./usuarios.routes')

const routes = new Router()

routes.use('/usuario', usuariosRoutes)

module.exports = routes