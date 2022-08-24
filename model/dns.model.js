const { conn_bd } = require('../config/cnn')

async function readDns() {
    const query = `select * from dns;`
    const dns = await conn_bd.query(query);
    return dns.rows
}

async function postCreateDns(serv_id, dns_nombre) {
    const query = `INSERT INTO public.dns(serv_id,dns_nombre) VALUES ($1,$2) RETURNING * `;
    const dns = await conn_bd.query(query, [serv_id, dns_nombre]);
    return { dns: dns };
}

async function putUpdateDns(dns_id, serv_id, dns_nombre) {
    const query = `UPDATE public.dns SET serv_id= $2, dns_nombre = $3 WHERE dns_id = $1 RETURNING * `;
    const dns = await conn_bd.query(query, [dns_id, serv_id, dns_nombre]);
    return { dns: dns };
}
async function deleteDns(dns_id) {
    const query = `DELETE FROM public.dns WHERE dns_id = $1 RETURNING * `;
    const dns = await conn_bd.query(query, [dns_id]);
    return { dns: dns };
}



module.exports = {
    readDns,
    postCreateDns,
    putUpdateDns,
    deleteDns
}