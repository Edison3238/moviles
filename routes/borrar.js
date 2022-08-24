const { Router } = require('express')
const clienteserverController = require('../controller/clienteserver.controller')


const route = Router();

route.get('/clienteserver', clienteserverController.getClienteserver);
route.post('/clienteserver', clienteserverController.postCreateClienteserver);
route.put('/clienteserver', clienteserverController.putUpdateClienteserver);
route.delete('/clienteserver', clienteserverController.deleteClienteserver);




module.exports = route