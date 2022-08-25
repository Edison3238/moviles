const { Router } = require('express')

const clienteController = require('../controller/cliente.controller')

//Declaramos midelware
const midelware = require('../midelware/token.midelware')

const route = Router();


route.get('/cliente', midelware.protegerRuta, clienteController.getCliente);
route.post('/cliente', midelware.protegerRuta, clienteController.postCreateCliente);
route.put('/cliente', midelware.protegerRuta, clienteController.putUpdateCliente);
route.delete('/cliente', midelware.protegerRuta, clienteController.deleteCliente);


module.exports = route