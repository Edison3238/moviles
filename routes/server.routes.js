const { Router } = require('express')

const serverController = require('../controller/server.controller')

//Declaramos midelware
const midelware = require('../midelware/token.midelware')

const route = Router();


route.get('/server', serverController.getServer);
route.post('/server', serverController.postCreateServer);
route.put('/server', serverController.putUpdateServer);
route.delete('/server', serverController.deleteServer);


module.exports = route