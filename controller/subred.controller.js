const subredModel = require('../model/subred.model')

async function getSubred(req, res) {
    try {
        const subred = await subredModel.readSubred()
        console.log(subred)
        res.status(200).json({ subred: subred })
    } catch (error) {
        res.status(500).send({ ERROR: error.message })
    }
}

async function postCreateSubred(req, res) {
    const { serv_id, sub_nombre } = req.body;
    try {
        const subred = await subredModel.postCreateSubred(serv_id, sub_nombre);
        res.status(200).json({ mensaje: 'subred creado correctamente' })
    } catch (error) {
        res.status(500).send({ ERROR: error.message })
    }
}

async function putUpdateSubred(req, res) {
    const { sub_id, serv_id, sub_nombre } = req.body;
    try {
        const subred = await subredModel.putUpdateSubred(sub_id, serv_id, sub_nombre);
        res.status(200).json({ mensaje: 'subred actualizado correctamente' });
    } catch (error) {
        res.status(500).send({ ERROR: error.message })
    }
}
async function deleteSubred(req, res) {
    const { sub_id } = req.body;
    try {
        const subred = await subredModel.deleteSubred(sub_id);
        res.status(200).json({ mensaje: 'subred eliminado correctamente ' });
    } catch (error) {
        res.status(500).send({ ERROR: error.message })
    }
}
module.exports = {
    getSubred,
    postCreateSubred,
    putUpdateSubred,
    deleteSubred
}