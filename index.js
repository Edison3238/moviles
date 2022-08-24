const express = require('express')
const app = express()

//Declaramos el puerto en el que va a funcionar la app.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//PUERTO
const PORT = process.env.PORT || 1999;

//RUTAS 
app.use(require('./routes/routes'))


//subimos el server

app.listen(PORT, () => {
    console.log(`Ya vale tu huevada en: http://localhost:${PORT}`)
})