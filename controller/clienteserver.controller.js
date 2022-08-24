const clienteserverModel = require('../model/clienteserver.model')

async function getClienteserver(req, res) {
    try {
        const clienteserver = await clienteserverModel.readClienteserver()
        console.log(clienteserver)
        res.status(200).json({ clienteserver: clienteserver })
    } catch (error) {
        res.status(500).send({ ERROR: error.message })
    }
}

async function postCreateClienteserver(req, res) {
    const { cli_id, serv_id, ip_privada } = req.body;
    try {
        const clienteserver = await clienteserverModel.postCreateClienteserver(cli_id, serv_id, ip_privada);
        res.status(200).json({ mensaje: 'clienteserver creado correctamente' })
    } catch (error) {
        res.status(500).send({ ERROR: error.message })
    }
}

async function putUpdateClienteserver(req, res) {
    const { cliserv_id, cli_id, serv_id, ip_privada } = req.body;
    try {
        const clienteserver = await clienteserverModel.putUpdateClienteserver(cliserv_id, cli_id, serv_id, ip_privada);
        res.status(200).json({ mensaje: 'clienteserver actualizado correctamente' });
    } catch (error) {
        res.status(500).send({ ERROR: error.message })
    }
}
async function deleteClienteserver(req, res) {
    const { cliserv_id } = req.body;
    try {
        const clienteserver = await clienteserverModel.deleteClienteserver(cliserv_id);
        res.status(200).json({ mensaje: 'clienteserver eliminado correctamente ' });
    } catch (error) {
        res.status(500).send({ ERROR: error.message })
    }
}
module.exports = {
    getClienteserver,
    postCreateClienteserver,
    putUpdateClienteserver,
    deleteClienteserver
}