const { Router } = require('express')

const clienteController = require('../controller/cliente.controller')

//Declaramos midelware
const midelware = require('../midelware/token.midelware')

const route = Router();


route.get('/cliente', clienteController.getCliente);
route.post('/cliente', clienteController.postCreateCliente);
route.put('/cliente', clienteController.putUpdateCliente);
route.delete('/cliente', clienteController.deleteCliente);


module.exports = route