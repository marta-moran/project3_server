const { isValidObjectId } = require('mongoose'); //propio de mongo. te comprueba que tenga la estructura de id
const hasJustLetters = require('../utils/hasJustLetters')

const User = require('../models/user.model');
const bcrypt = require('bcryptjs');
const saltRounds = 10

const signUp = (req, res, next) => {
    //, age, gender, picture, preferences, description
    const { username, email, password } = req.body

    if (hasJustLetters(username)) {
        console.log("no puede tener números y/o caracteres")
        res.status(400).json({ message: "El nombre no puede contener números y/o caracteres" })
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
    User.findById(req.params.id)
        .then((user) => {
            console.log(user)
            res.status(200).json({ message: 'Todo Ok' })
        }).catch(error => next(error))
}

const updateProfile = (req, res, next) => {
    const { username } = req.body

    if (hasJustLetters(username)) {
        console.log("no puede tener números y/o caracteres")
        res.status(400).json({ message: "El nombre no puede contener números y/o caracteres" })
        return
    }

    User
        .findByIdAndUpdate(req.params.id, { username })
        .then((userUpdate) => {
            console.log(userUpdate)

            if (userUpdate === null) {
                res.status(404).json({ message: `No existe` })
            } else {
                res.status(200).json({ message: `${username} actualizado` })
            }
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
