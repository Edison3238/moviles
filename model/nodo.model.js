const { conn_bd } = require('../config/cnn')

async function readNodo() {
    const query = `select * from nodo;`
    const nodo = await conn_bd.query(query);
    return nodo.rows
}

async function postCreateNodo(suc_id, nodo_nombre, nodo_port_wireward, nodo_estado_rb) {
    const query = `INSERT INTO public.nodo(suc_id, nodo_nombre, nodo_port_wireward, nodo_estado_rb) VALUES ($1,$2,$3,$4) RETURNING * `;
    const nodo = await conn_bd.query(query, [suc_id, nodo_nombre, nodo_port_wireward, nodo_estado_rb]);
    return { nodo: nodo };
}

async function putUpdateNodo(nodo_id, suc_id, nodo_nombre, nodo_port_wireward, nodo_estado_rb) {
    const query = `UPDATE public.nodo SET suc_id = $2, nodo_nombre =3$, nodo_port_wireward=$4, nodo_estado_rb=$5 WHERE nodo_id = $1 RETURNING * `;
    const nodo = await conn_bd.query(query, [nodo_id, suc_id, nodo_nombre, nodo_port_wireward, nodo_estado_rb]);
    return { nodo: nodo };
}
async function deleteNodo(nodo_id) {
    const query = `DELETE FROM public.nodo WHERE nodo_id = $1 RETURNING * `;
    const nodo = await conn_bd.query(query, [nodo_id]);
    return { nodo: nodo };
}



module.exports = {
    readNodo,
    postCreateNodo,
    putUpdateNodo,
    deleteNodo
}