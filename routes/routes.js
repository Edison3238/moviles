const { Router } = require('express')
const sucursalController = require('../controller/sucursal.controller')
const clienteController = require('../controller/cliente.controller')

const route = Router();

route.get('/sucursal', sucursalController.getSucursal);
route.post('/sucursal', sucursalController.postCreateSucursal);
route.put('/sucursal', sucursalController.putUpdateSucursal);
route.delete('/sucursal', sucursalController.deleteSucursal);

route.get('/cliente', clienteController.getCliente);
route.post('/cliente', clienteController.postCreateCliente);
route.put('/cliente', clienteController.putUpdateCliente);
route.delete('/cliente', clienteController.deleteCliente);

module.exports = route