const { conn_bd } = require('../config/cnn')

async function readSucursal() {
    const query = `select * from sucursal;`
    const sucursal = await conn_bd.query(query);
    return sucursal.rows
}

async function postCreateSucursal(suc_nombre) {
    const query = `INSERT INTO public.sucursal(suc_nombre) VALUES ($1) RETURNING * `;
    const sucursal = await conn_bd.query(query, [suc_nombre]);
    return { sucursal: sucursal };
}

async function putUpdateSucursal(suc_id, suc_nombre) {
    const query = `UPDATE public.sucursal SET suc_nombre= $2 WHERE suc_id = $1 RETURNING * `;
    const sucursal = await conn_bd.query(query, [suc_id, suc_nombre]);
    return { sucursal: sucursal };
}
async function deleteSucursal(suc_id) {
    const query = `DELETE FROM public.sucursal WHERE suc_id = $1 RETURNING * `;
    const sucursal = await conn_bd.query(query, [suc_id]);
    return { sucursal: sucursal };
}



module.exports = {
    readSucursal,
    postCreateSucursal,
    putUpdateSucursal,
    deleteSucursal
}