const { Router } = require('express')

const subbredController = require('../controller/subred.controller')

//Declaramos midelware
const midelware = require('../midelware/token.midelware')

const route = Router();


route.get('/subred', midelware.protegerRuta, subbredController.getSubred);
route.post('/subred', midelware.protegerRuta, subbredController.postCreateSubred);
route.put('/subred', midelware.protegerRuta, subbredController.putUpdateSubred);
route.delete('/subred', midelware.protegerRuta, subbredController.deleteSubred)


module.exports = route