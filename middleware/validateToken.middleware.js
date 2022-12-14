const { verifyJwt } = require('../utils/jwt.util');
const deleteBearer = require('../utils/string');

const validateToken = (req, res, next) => {
    const { authorization } = req.headers;
    if (authorization) {
        const token = deleteBearer(authorization);
        const { sub, email } = verifyJwt(token);
        req.user = { _id: sub, email };
    } else {
        res.status(401).json({ message: "no tienes acceso" });
        return;
    }

    next();
}

module.exports = validateToken;