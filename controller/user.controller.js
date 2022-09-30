const { isValidObjectId } = require('mongoose'); //propio de mongo. te comprueba que tenga la estructura de id
const hasJustLetters = require('../utils/hasJustLetters')
const User = require('../models/user.model');


const getPeople = (req, res, next) => {
    User.find()
        .then((users) => {
            console.log(users)
            res.status(200).json(users)
        })
        .catch(error => next(error))
}

const getPerson = (req, res, next) => {
    User.findById(req.params.id)
        .then((user) => {
            console.log(user)
            res.status(200).json(user)
        })
        .catch(error => next(error))
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

const getUser = (req, res, next) => {
    if (req.user) {
        User.findById(req.user._id).select('email role username').then((user) => {
            if (user) {
                res.status(200).json(user)
            } else {
                res.sendStatus(404);
            }
        })
    } else {
        res.sendStatus(401);
    }
}


module.exports = {
    getPeople,
    getPerson,
    updateProfile,
    deleteProfile,
    getUser,
};