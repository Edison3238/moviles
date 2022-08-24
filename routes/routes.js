const { Router } = require('express')
const sucursalController = require('../controller/sucursal.controller')
const clienteController = require('../controller/cliente.controller')
const dnsController = require('../controller/dns.controller')
const allowedipsController = require('../controller/allowedips.controller')
const subbredController = require('../controller/subred.controller')

const route = Router();

route.get('/sucursal', sucursalController.getSucursal);
route.post('/sucursal', sucursalController.postCreateSucursal);
route.put('/sucursal', sucursalController.putUpdateSucursal);
route.delete('/sucursal', sucursalController.deleteSucursal);

route.get('/cliente', clienteController.getCliente);
route.post('/cliente', clienteController.postCreateCliente);
route.put('/cliente', clienteController.putUpdateCliente);
route.delete('/cliente', clienteController.deleteCliente);

route.get('/dns', dnsController.getDns);
route.post('/dns', dnsController.postCreateDns);
route.put('/dns', dnsController.putUpdateDns);
route.delete('/dns', dnsController.deleteDns);

route.get('/allowedips', allowedipsController.getAllowedips);
route.post('/allowedips', allowedipsController.postCreateAllowedips);
route.put('/allowedips', allowedipsController.putUpdateAllowedips);
route.delete('/allowedips', allowedipsController.deleteAllowedips);

route.get('/subred', subbredController.getSubred);
route.post('/subred', subbredController.postCreateSubred);
route.put('/subred', subbredController.putUpdateSubred);
route.delete('/subred', subbredController.deleteSubred)


module.exports = route