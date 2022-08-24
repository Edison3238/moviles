const { conn_bd } = require('../config/cnn')

async function readCliente() {
    const query = `select * from cliente;`
    const cliente = await conn_bd.query(query);
    return cliente.rows
}

async function postCreateCliente(cli_nombre, cli_clave_publica) {
    const query = `INSERT INTO public.cliente(cli_nombre,cli_clave_publica) VALUES ($1,$2) RETURNING * `;
    const cliente = await conn_bd.query(query, [cli_nombre, cli_clave_publica]);
    return { cliente: cliente };
}

async function putUpdateCliente(cli_id, cli_nombre, cli_clave_publica) {
    const query = `UPDATE public.cliente SET cli_nombre= $2, cli_clave_publica = $3 WHERE cli_id = $1 RETURNING * `;
    const cliente = await conn_bd.query(query, [cli_id, cli_nombre, cli_clave_publica]);
    return { cliente: cliente };
}
async function deleteCliente(cli_id) {
    const query = `DELETE FROM public.cliente WHERE cli_id = $1 RETURNING * `;
    const cliente = await conn_bd.query(query, [cli_id]);
    return { cliente: cliente };
}



module.exports = {
    readCliente,
    postCreateCliente,
    putUpdateCliente,
    deleteCliente
}