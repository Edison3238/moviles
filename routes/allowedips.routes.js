const { Router } = require('express')

const allowedipsController = require('../controller/allowedips.controller')

//Declaramos midelware
const midelware = require('../midelware/token.midelware')


const route = Router();


route.get('/allowedips', midelware.protegerRuta, allowedipsController.getAllowedips);
route.post('/allowedips', midelware.protegerRuta, allowedipsController.postCreateAllowedips);
route.put('/allowedips', midelware.protegerRuta, allowedipsController.putUpdateAllowedips);
route.delete('/allowedips', midelware.protegerRuta, allowedipsController.deleteAllowedips);


module.exports = route