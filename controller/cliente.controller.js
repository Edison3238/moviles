const clienteModel = require('../model/cliente.model')

async function getCliente(req, res) {
    try {
        const cliente = await clienteModel.readCliente()
        console.log(cliente)
        res.status(200).json({ cliente: cliente })
    } catch (error) {
        res.status(500).send({ ERROR: error.message })
    }
}

async function postCreateCliente(req, res) {
    const { cli_nombre, cli_clave_publica } = req.body;
    try {
        const cliente = await clienteModel.postCreateCliente(cli_nombre, cli_clave_publica);
        res.status(200).json({ mensaje: 'cliente creado correctamente' })
    } catch (error) {
        res.status(500).send({ ERROR: error.message })
    }
}

async function putUpdateCliente(req, res) {
    const { cli_id, cli_nombre, cli_clave_publica } = req.body;
    try {
        const cliente = await clienteModel.putUpdateCliente(cli_id, cli_nombre, cli_clave_publica);
        res.status(200).json({ mensaje: 'cliente actualizado correctamente' });
    } catch (error) {
        res.status(500).send({ ERROR: error.message })
    }
}
async function deleteCliente(req, res) {
    const { cli_id } = req.body;
    try {
        const cliente = await clienteModel.deleteCliente(cli_id);
        res.status(200).json({ mensaje: 'cliente eliminado correctamente ' });
    } catch (error) {
        res.status(500).send({ ERROR: error.message })
    }
}
module.exports = {
    getCliente,
    postCreateCliente,
    putUpdateCliente,
    deleteCliente
}