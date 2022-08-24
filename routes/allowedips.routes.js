const { Router } = require('express')

const allowedipsController = require('../controller/allowedips.controller')

const route = Router();


route.get('/allowedips', allowedipsController.getAllowedips);
route.post('/allowedips', allowedipsController.postCreateAllowedips);
route.put('/allowedips', allowedipsController.putUpdateAllowedips);
route.delete('/allowedips', allowedipsController.deleteAllowedips);


module.exports = route