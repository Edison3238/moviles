const { Router } = require('express')
const sucursalController = require('../controller/sucursal.controller')
const clienteController = require('../controller/cliente.controller')
const dnsController = require('../controller/dns.controller')
const allowedipsController = require('../controller/allowedips.controller')
const subbredController = require('../controller/subred.controller')
const nodoController = require('../controller/nodo.controller')
const serverController = require('../controller/server.controller')


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

route.get('/nodo', nodoController.getNodo);
route.post('/nodo', nodoController.postCreateNodo);
route.put('/nodo', nodoController.putUpdateNodo);
route.delete('/nodo', nodoController.deleteNodo);

route.get('/server', serverController.getServer);
route.post('/server', serverController.postCreateServer);
route.put('/server', serverController.putUpdateServer);
route.delete('/server', serverController.deleteServer);

module.exports = route