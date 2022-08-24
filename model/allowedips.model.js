const { conn_bd } = require('../config/cnn')

async function readAllowed_ips() {
    const query = `select * from allowed_ips;`
    const allowed_ips = await conn_bd.query(query);
    return allowed_ips.rows
}

async function postCreateAllowed_ips(serv_id, allowed_ips) {
    const query = `INSERT INTO public.allowed_ips(serv_id,allowed_ips) VALUES ($1,$2) RETURNING * `;
    const allowed_Ips = await conn_bd.query(query, [serv_id, allowed_ips]);
    return { allowed_ips: allowed_Ips };
}

async function putUpdateAllowed_ips(all_id, serv_id, allowed_ips) {
    const query = `UPDATE public.allowed_ips SET serv_id= $2, allowed_ips = $3 WHERE all_id = $1 RETURNING * `;
    const allowed_Ips = await conn_bd.query(query, [all_id, serv_id, allowed_ips]);
    return { allowed_ips: allowed_Ips };
}
async function deleteAllowed_ips(all_id) {
    const query = `DELETE FROM public.allowed_ips WHERE all_id = $1 RETURNING * `;
    const allowed_Ips = await conn_bd.query(query, [all_id]);
    return { allowed_ips: allowed_Ips };
}



module.exports = {
    readAllowed_ips,
    postCreateAllowed_ips,
    putUpdateAllowed_ips,
    deleteAllowed_ips
}