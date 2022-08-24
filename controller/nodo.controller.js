const nodoModel = require('../model/nodo.model')

async function getNodo(req, res) {
    try {
        const nodo = await nodoModel.readNodo()
        console.log(nodo)
        res.status(200).json({ nodo: nodo })
    } catch (error) {
        res.status(500).send({ ERROR: error.message })
    }
}

async function postCreateNodo(req, res) {
    const { suc_id, nodo_nombre, nodo_port_wireward, nodo_estado_rb } = req.body;
    try {
        const nodo = await nodoModel.postCreateNodo(suc_id, nodo_nombre, nodo_port_wireward, nodo_estado_rb);
        res.status(200).json({ mensaje: 'nodo creado correctamente' })
    } catch (error) {
        res.status(500).send({ ERROR: error.message })
    }
}

async function putUpdateNodo(req, res) {
    const { nodo_id, suc_id, nodo_nombre, nodo_port_wireward, nodo_estado_rb } = req.body;
    try {
        const nodo = await nodoModel.putUpdateNodo(nodo_id, suc_id, nodo_nombre, nodo_port_wireward, nodo_estado_rb);
        res.status(200).json({ mensaje: 'nodo actualizado correctamente' });
    } catch (error) {
        res.status(500).send({ ERROR: error.message })
    }
}
async function deleteNodo(req, res) {
    const { nodo_id } = req.body;
    try {
        const nodo = await nodoModel.deleteNodo(nodo_id);
        res.status(200).json({ mensaje: 'nodo eliminado correctamente ' });
    } catch (error) {
        res.status(500).send({ ERROR: error.message })
    }
}
module.exports = {
    getNodo,
    postCreateNodo,
    putUpdateNodo,
    deleteNodo
}