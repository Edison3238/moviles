const { Router } = require('express')

const subbredController = require('../controller/subred.controller')


const route = Router();


route.get('/subred', subbredController.getSubred);
route.post('/subred', subbredController.postCreateSubred);
route.put('/subred', subbredController.putUpdateSubred);
route.delete('/subred', subbredController.deleteSubred)


module.exports = route