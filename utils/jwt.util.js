const jwt = require('jsonwebtoken');

const signJwt = (idUser, email) => {
    return jwt.sign({ email }, process.env.SECRET, { expiresIn: '7d', subject: idUser });
};

const verifyJwt = (token) => {
    return jwt.verify(token, process.env.SECRET);
}

module.exports = {
    signJwt,
    verifyJwt
}
