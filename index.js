const express = require('express')
const app = express()

//Declaramos el puerto en el que va a funcionar la app.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method, access-token");
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//PUERTO
const PORT = process.env.PORT || 1999;

//RUTAS 
//app.use(require('./routes/routes'))

//VARIAS RUTAS
app.use(require('./routes/allowedips.routes'))
app.use(require('./routes/cliente.routes'))
app.use(require('./routes/clienteserver.routes'))
app.use(require('./routes/dns.routes'))
app.use(require('./routes/nodo.routes'))
app.use(require('./routes/server.routes'))
app.use(require('./routes/subred.routes'))
app.use(require('./routes/sucursal.routes'))

//subimos el server

app.listen(PORT, () => {
    console.log(`Ya vale tu huevada en: http://localhost:${PORT}`)
})