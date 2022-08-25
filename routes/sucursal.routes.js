const { Router } = require('express')
const sucursalController = require('../controller/sucursal.controller')


//Declaramos midelware
const midelware = require('../midelware/token.midelware')

const route = Router();

route.post('/login', sucursalController.postLogin)
route.get('/sucursal', midelware.protegerRuta, sucursalController.getSucursal);
route.post('/sucursal', midelware.protegerRuta, sucursalController.postCreateSucursal);
route.put('/sucursal', midelware.protegerRuta, sucursalController.putUpdateSucursal);
route.delete('/sucursal', midelware.protegerRuta, sucursalController.deleteSucursal);

module.exports = route