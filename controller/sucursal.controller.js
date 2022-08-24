const sucursalModel = require('../model/sucursal.model')

async function getSucursal(req, res) {
    try {
        const sucursal = await sucursalModel.readSucursal()
        console.log(sucursal)
        res.status(200).json({ sucursal: sucursal })
    } catch (error) {
        res.status(500).send({ ERROR: error.message })
    }
}

async function postCreateSucursal(req, res) {
    const { suc_nombre } = req.body;
    try {
        const sucursal = await sucursalModel.postCreateSucursal(suc_nombre);
        res.status(200).json({ mensaje: 'Sucursal creada correctamente' })
    } catch (error) {
        res.status(500).send({ ERROR: error.message })
    }
}

async function putUpdateSucursal(req, res) {
    const { suc_id, suc_nombre } = req.body;
    try {
        const sucursal = await sucursalModel.putUpdateSucursal(suc_id, suc_nombre);
        res.status(200).json({ mensaje: 'Sucursal actualizada correctamente' });
    } catch (error) {
        res.status(500).send({ ERROR: error.message })
    }
}
async function deleteSucursal(req, res) {
    const { suc_id } = req.body;
    try {
        const sucursal = await sucursalModel.deleteSucursal(suc_id);
        res.status(200).json({ mensaje: 'Sucursal eliminada correctamente ' });
    } catch (error) {
        res.status(500).send({ ERROR: error.message })
    }
}
module.exports = {
    getSucursal,
    postCreateSucursal,
    putUpdateSucursal,
    deleteSucursal
}