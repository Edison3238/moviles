const { Router } = require('express')
const sucursalController = require('../controller/sucursal.controller')

const route = Router();

route.get('/sucursal', sucursalController.getSucursal);
route.post('/sucursal', sucursalController.postCreateSucursal);
route.put('/sucursal', sucursalController.putUpdateSucursal);
route.delete('/sucursal', sucursalController.deleteSucursal);

module.exports = route