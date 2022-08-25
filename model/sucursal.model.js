const { conn_bd } = require('../config/cnn')

async function readSucursal() {
    const query = `select * from sucursal;`
    const sucursal = await conn_bd.query(query);
    return sucursal.rows
}
async function readSucursalByUser(suc_user) {
    const query = `select suc_user, suc_pass from sucursal where suc_user = $1;`
    const sucursal = await conn_bd.query(query, [suc_user]);
    return sucursal.rows[0]
}

async function postCreateSucursal(suc_nombre, suc_user, suc_pass) {
    const query = `INSERT INTO public.sucursal(suc_nombre, suc_user, suc_pass) VALUES ($1,$2,$3) RETURNING * `;
    const sucursal = await conn_bd.query(query, [suc_nombre, suc_user, suc_pass]);
    return { sucursal: sucursal };
}

async function putUpdateSucursal(suc_id, suc_nombre, suc_user, suc_pass) {
    const query = `UPDATE public.sucursal SET suc_nombre = $2, suc_user =$3, suc_pass =$4 WHERE suc_id = $1 RETURNING * `;
    const sucursal = await conn_bd.query(query, [suc_id, suc_nombre, suc_user, suc_pass]);
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
    deleteSucursal,
    readSucursalByUser
}