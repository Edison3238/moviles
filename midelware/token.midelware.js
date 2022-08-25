const jwt = require('jsonwebtoken');

function validarToken(token) {
    var codigo = 0;
    jwt.verify(token, 'servidorestoken', (err, decoded) => {
        if (err) {
            codigo = 1;
        } else {
            codigo = decoded;
        }
    });
    return codigo;
}

//declaramos el interceptor
function protegerRuta(req, res, next) {
    const token = req.headers['access-token'];
    if (token) {
        const codigo = validarToken(token);
        if (codigo == 1) {
            res.status(401).send({ mensaje: 'Token incorrecto' });
        } else {
            req.decoded = codigo;
            next();
        }
    } else {
        res.status(401).send({ mensaje: 'Token no ingresado' });
    }
}

module.exports = {
    protegerRuta
}