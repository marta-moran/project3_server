const { isValidObjectId } = require('mongoose'); //propio de mongo

const hasNumbers = require('../utils/hasNumbers')
const hasSpecialCharacters = require('../utils/hasSpecialCharacters')

const User = require('../models/user.model');
const bcrypt = require('bcryptjs');
const saltRounds = 10

const signUp = (req, res, next) => {
    //, age, gender, picture, preferences, description
    const { username, email, password } = req.body

    if (hasNumbers(username) && hasSpecialCharacters(username)) {
        console.log("no puede tener números y/o caracteres")
        return
    }

    if (password.length > 4)
        bcrypt
            .genSalt(saltRounds)
            .then(salt => bcrypt.hash(password, salt))
            .then(hashedPassword => User.create({ username, password: hashedPassword, email }))
            .then((createdUser) => {
                console.log(createdUser)
                res.status(200).json({ message: "Usuario creado" })
            })
            .catch(error => {
                console.log(error)
                if (error.code === 11000) {
                    res.status(400).json({ message: "El usuario ya existe" })
                } else {
                    next(error)
                }
            })

}
const login = (req, res, next) => {

    const { email, password } = req.body;

    console.log({ email, password })
    User
        .findOne({ email })
        .then(user => {
            if (!user) {
                console.log("Usuario no registrado")
            } else if (bcrypt.compareSync(password, user.password) === false) {
                // console.log('Usuario o contraseña incorrecta');
                res.status(400).json({ message: "Usuario o contraseña incorrecta" })
                return
            } else {
                console.log("Hola", email)
                res.status(200).json({ message: `Hola ${email}` })
            }
        })
        .catch(error => next(error))

}

const getPeople = (req, res, next) => {
}

const getPerson = (req, res, next) => {
}

const updateProfile = (req, res, next) => {
    const { username } = req.body
    console.log(req.body)
    User
        .findByIdAndUpdate(req.params.id, { username }, { new: true })
        .then((userUpdate) => {
            console.log(userUpdate)
            res.status(200).json({ message: `${username} actualizado` })
        })
        .catch((err) => {
            console.log(err)
            if (err.code === 11000) {
                res.status(400).json({ message: "No se ha podido actualizar el usuario" })
            } else {
                next(err);
            }
        });
}

const deleteProfile = (req, res, next) => {

    User.findByIdAndDelete(req.params.id)
        .then((deleteUser) => {
            console.log(deleteUser)
            res.status(200).json({ message: `Se ha borrado el usuario` })
        })
        .catch((err) => {
            if (err.code === 11000) {
                res.status(400).json({ message: "No se ha podido borrar el usuario" })
            } else {
                next(err);
            }
        })

}

module.exports = {
    signUp,
    login,
    getPeople,
    getPerson,
    updateProfile,
    deleteProfile,
};
