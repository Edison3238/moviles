const dnsModel = require('../model/dns.model')

async function getDns(req, res) {
    try {
        const dns = await dnsModel.readDns()
        console.log(dns)
        res.status(200).json({ dns: dns })
    } catch (error) {
        res.status(500).send({ ERROR: error.message })
    }
}

async function postCreateDns(req, res) {
    const { serv_id, dns_nombre } = req.body;
    try {
        const dns = await dnsModel.postCreateDns(serv_id, dns_nombre);
        res.status(200).json({ mensaje: 'dns creado correctamente' })
    } catch (error) {
        res.status(500).send({ ERROR: error.message })
    }
}

async function putUpdateDns(req, res) {
    const { dns_id, serv_id, dns_nombre } = req.body;
    try {
        const dns = await dnsModel.putUpdateDns(dns_id, serv_id, dns_nombre);
        res.status(200).json({ mensaje: 'dns actualizado correctamente' });
    } catch (error) {
        res.status(500).send({ ERROR: error.message })
    }
}
async function deleteDns(req, res) {
    const { dns_id } = req.body;
    try {
        const dns = await dnsModel.deleteDns(dns_id);
        res.status(200).json({ mensaje: 'dns eliminado correctamente ' });
    } catch (error) {
        res.status(500).send({ ERROR: error.message })
    }
}
module.exports = {
    getDns,
    postCreateDns,
    putUpdateDns,
    deleteDns
}