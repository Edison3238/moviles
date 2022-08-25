const { Router } = require('express')

const dnsController = require('../controller/dns.controller')

//Declaramos midelware
const midelware = require('../midelware/token.midelware')

const route = Router();


route.get('/dns', midelware.protegerRuta, dnsController.getDns);
route.post('/dns', midelware.protegerRuta, dnsController.postCreateDns);
route.put('/dns', midelware.protegerRuta, dnsController.putUpdateDns);
route.delete('/dns', midelware.protegerRuta, dnsController.deleteDns);


module.exports = route