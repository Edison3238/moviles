const { Router } = require('express')

const dnsController = require('../controller/dns.controller')


const route = Router();


route.get('/dns', dnsController.getDns);
route.post('/dns', dnsController.postCreateDns);
route.put('/dns', dnsController.putUpdateDns);
route.delete('/dns', dnsController.deleteDns);


module.exports = route