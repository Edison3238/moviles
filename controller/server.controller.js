const serverModel = require('../model/server.model')

async function getServer(req, res) {
    try {
        const server = await serverModel.readServer()
        console.log(server)
        res.status(200).json({ server: server })
    } catch (error) {
        res.status(500).send({ ERROR: error.message })
    }
}

async function postCreateServer(req, res) {
    const { nodo_id, serv_clave_publica, serv_nombre } = req.body;
    try {
        const server = await serverModel.postCreateServer(nodo_id, serv_clave_publica, serv_nombre);
        res.status(200).json({ mensaje: 'server creado correctamente' })
    } catch (error) {
        res.status(500).send({ ERROR: error.message })
    }
}

async function putUpdateServer(req, res) {
    const { serv_id, nodo_id, serv_clave_publica, serv_nombre } = req.body;
    try {
        const server = await serverModel.putUpdateServer(serv_id, nodo_id, serv_clave_publica, serv_nombre);
        res.status(200).json({ mensaje: 'server actualizado correctamente' });
    } catch (error) {
        res.status(500).send({ ERROR: error.message })
    }
}
async function deleteServer(req, res) {
    const { serv_id } = req.body;
    try {
        const server = await serverModel.deleteServer(serv_id);
        res.status(200).json({ mensaje: 'server eliminado correctamente ' });
    } catch (error) {
        res.status(500).send({ ERROR: error.message })
    }
}
module.exports = {
    getServer,
    postCreateServer,
    putUpdateServer,
    deleteServer
}