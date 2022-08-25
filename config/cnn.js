const { Pool } = require('pg')

const conn_bd = new Pool({
    host: 'localhost',
    port: '5433',
    database: 'servidoresv5',
    user: 'postgres',
    password: '12345'
})

module.exports = {
    conn_bd
}