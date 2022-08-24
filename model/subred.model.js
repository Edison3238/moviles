const { conn_bd } = require('../config/cnn')

async function readSubred() {
    const query = `select * from subred;`
    const subred = await conn_bd.query(query);
    return subred.rows
}

async function postCreateSubred(serv_id, sub_nombre) {
    const query = `INSERT INTO public.subred(serv_id,sub_nombre) VALUES ($1,$2) RETURNING * `;
    const subred = await conn_bd.query(query, [serv_id, sub_nombre]);
    return { subred: subred };
}

async function putUpdateSubred(sub_id, serv_id, sub_nombre) {
    const query = `UPDATE public.subred SET serv_id= $2, sub_nombre = $3 WHERE sub_id = $1 RETURNING * `;
    const subred = await conn_bd.query(query, [sub_id, serv_id, sub_nombre]);
    return { subred: subred };
}
async function deleteSubred(sub_id) {
    const query = `DELETE FROM public.subred WHERE sub_id = $1 RETURNING * `;
    const subred = await conn_bd.query(query, [sub_id]);
    return { subred: subred };
}



module.exports = {
    readSubred,
    postCreateSubred,
    putUpdateSubred,
    deleteSubred
}