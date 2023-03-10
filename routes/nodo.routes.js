const { Router } = require('express')

const nodoController = require('../controller/nodo.controller')

//Declaramos midelware
const midelware = require('../midelware/token.midelware')

const route = Router();



route.get('/nodo', nodoController.getNodo);
route.post('/nodo', nodoController.postCreateNodo);
route.put('/nodo', nodoController.putUpdateNodo);
route.delete('/nodo', nodoController.deleteNodo);


module.exports = route