const { conn_bd } = require('../config/cnn')

async function readClienteserver() {
    const query = `select * from cliente_server;`
    const clienteserver = await conn_bd.query(query);
    return clienteserver.rows
}

async function postCreateClienteserver(cli_id, serv_id, ip_privada) {
    const query = `INSERT INTO public.cliente_server(cli_id, serv_id, ip_privada) VALUES ($1,$2,$3) RETURNING * `;
    const clienteserver = await conn_bd.query(query, [cli_id, serv_id, ip_privada]);
    return { clienteserver: clienteserver };
}

async function putUpdateClienteserver(cliserv_id, cli_id, serv_id, ip_privada) {
    const query = `UPDATE public.Cliente_server SET cli_id =$2, serv_id = $3, ip_privada = $4 WHERE cliserv_id = $1 RETURNING * `;
    const clienteserver = await conn_bd.query(query, [cliserv_id, cli_id, serv_id, ip_privada]);
    return { clienteserver: clienteserver };
}
async function deleteClienteserver(cliserv_id) {
    const query = `DELETE FROM public.cliente_server WHERE cliserv_id = $1 RETURNING * `;
    const clienteserver = await conn_bd.query(query, [cliserv_id]);
    return { clienteserver: clienteserver };
}



module.exports = {
    readClienteserver,
    postCreateClienteserver,
    putUpdateClienteserver,
    deleteClienteserver
}