
const { Router } = require('express');

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./doc.swagger.json');

const usuariosRoutes = require('./usuarios.routes');
const LoginController = require('../controllers/LoginController');
const LocaisController = require('./locais.routes');
const validaToken = require('../middleware/validaToken');

const routes = new Router();

routes.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

routes.use('/usuario', usuariosRoutes);
routes.post('/login', LoginController.login);

//rotas privadas, validar
routes.use('/local', validaToken, LocaisController);

module.exports = routes;