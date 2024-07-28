const {Router} = require('express');
const LocaisController = require('../controllers/LocaisController');

const LocaisRouter = new Router();

LocaisRouter.post('/', LocaisController.criar);
LocaisRouter.get('/', LocaisController.listar);
LocaisRouter.get('/:id', LocaisController.listarUm);
LocaisRouter.put('/:id', LocaisController.editar);
LocaisRouter.delete('/:id', LocaisController.deletar);

module.exports = LocaisRouter