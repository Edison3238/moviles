const allowedipsModel = require('../model/allowedips.model')

async function getAllowedips(req, res) {
    try {
        const allowedips = await allowedipsModel.readAllowed_ips()
        console.log(allowedips)
        res.status(200).json({ allowedips: allowedips })
    } catch (error) {
        res.status(500).send({ ERROR: error.message })
    }
}

async function postCreateAllowedips(req, res) {
    const { serv_id, allowed_ips } = req.body;
    try {
        const allowedips = await allowedipsModel.postCreateAllowed_ips(serv_id, allowed_ips);
        res.status(200).json({ mensaje: 'allowedips creado correctamente' })
    } catch (error) {
        res.status(500).send({ ERROR: error.message })
    }
}

async function putUpdateAllowedips(req, res) {
    const { all_id, serv_id, allowed_ips } = req.body;
    try {
        const allowedips = await allowedipsModel.putUpdateAllowed_ips(all_id, serv_id, allowed_ips);
        res.status(200).json({ mensaje: 'allowedips actualizado correctamente' });
    } catch (error) {
        res.status(500).send({ ERROR: error.message })
    }
}
async function deleteAllowedips(req, res) {
    const { all_id } = req.body;
    try {
        const allowedips = await allowedipsModel.deleteAllowed_ips(all_id);
        res.status(200).json({ mensaje: 'allowedips eliminado correctamente ' });
    } catch (error) {
        res.status(500).send({ ERROR: error.message })
    }
}
module.exports = {
    getAllowedips,
    postCreateAllowedips,
    putUpdateAllowedips,
    deleteAllowedips
}