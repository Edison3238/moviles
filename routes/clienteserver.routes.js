const { Router } = require('express')

const clienteserverController = require('../controller/clienteserver.controller')

//Declaramos midelware
const midelware = require('../midelware/token.midelware')

const route = Router();


route.get('/clienteserver', midelware.protegerRuta, clienteserverController.getClienteserver);
route.post('/clienteserver', midelware.protegerRuta, clienteserverController.postCreateClienteserver);
route.put('/clienteserver', midelware.protegerRuta, clienteserverController.putUpdateClienteserver);
route.delete('/clienteserver', midelware.protegerRuta, clienteserverController.deleteClienteserver);

module.exports = route