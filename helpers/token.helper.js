const jwt = require('jsonwebtoken');

function generarToken(suc_user, suc_pass) {
    const payload = {
        user: suc_user,
        pass: suc_pass
    };

    const token = jwt.sign(payload, 'servidorestoken', {
        expiresIn: '10h'
    });

    return token;
}

module.exports = {
    generarToken
}