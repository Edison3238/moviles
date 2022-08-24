const { conn_bd } = require('../config/cnn')

async function readServer() {
    const query = `select * from server;`
    const server = await conn_bd.query(query);
    return server.rows
}

async function postCreateServer(nodo_id, serv_clave_publica, serv_nombre) {
    const query = `INSERT INTO public.server(nodo_id, serv_clave_publica, serv_nombre) VALUES ($1,$2,$3) RETURNING * `;
    const server = await conn_bd.query(query, [nodo_id, serv_clave_publica, serv_nombre]);
    return { server: server };
}

async function putUpdateServer(serv_id, nodo_id, serv_clave_publica, serv_nombre) {
    const query = `UPDATE public.server SET nodo_id = $2, serv_clave_publica = $3, serv_nombre = $4 WHERE serv_id = $1 RETURNING * `;
    const server = await conn_bd.query(query, [serv_id, nodo_id, serv_clave_publica, serv_nombre]);
    return { server: server };
}
async function deleteServer(serv_id) {
    const query = `DELETE FROM public.server WHERE serv_id = $1 RETURNING * `;
    const server = await conn_bd.query(query, [serv_id]);
    return { server: server };
}



module.exports = {
    readServer,
    postCreateServer,
    putUpdateServer,
    deleteServer
}