const { isValidObjectId } = require('mongoose'); //propio de mongo. te comprueba que tenga la estructura de id
const hasJustLetters = require('../utils/hasJustLetters')
const User = require('../models/user.model');
const MatchModel = require('../models/match.model');

const getPeople = (req, res, next) => {

    User.findById(req.user._id)
        .then((user) => {
            return User.find({ $and: [{ _id: { $nin: user.likes.concat(user.dislikes) } }, { _id: { $ne: req.user._id } }] })
        })
        .then((users) => {

            res.status(200).json(users)
        })
        .catch(error => next(error))

}

const getPerson = (req, res, next) => {
    User.findById(req.params.id)
        .then((user) => {
            // console.log(user)
            res.status(200).json(user)
        })
        .catch(error => next(error))
}

const updateProfile = (req, res, next) => {
    const { username, age, description, preferences } = req.body

    if (hasJustLetters(username)) {
        // console.log("no puede tener números y/o caracteres")
        res.status(400).json({ message: "El nombre no puede contener números y/o caracteres" })
        return
    }
    // req.user._id
    User
        .findByIdAndUpdate(req.user._id, { username, age, description, preferences })
        .then((userUpdate) => {


            if (userUpdate === null) {
                res.status(404).json({ message: `No existe` })
            } else {
                res.status(200).json({ message: `${username} actualizado` })
            }
        })
        .catch((err) => {
            // console.log(err)
            if (err.code === 11000) {
                res.status(400).json({ message: "No se ha podido actualizar el usuario" })
            } else {
                next(err);
            }
        });
}


const deleteProfile = (req, res, next) => {

    User.findByIdAndDelete(req.user._id)
        .then((deleteUser) => {
            res.status(200).json({ message: `Se ha borrado el usuario ${deleteUser}` })
        })
        .catch((err) => {
            next(err)
        })

}

const getUser = (req, res, next) => {
    if (req.user) {
        User.findById(req.user._id).select('email role username')
            .then((user) => {
                if (user) {
                    res.status(200).json(user)
                } else {
                    res.sendStatus(404);
                }
            })
            .catch((err) => {
                next(err)
            })

    } else {
        res.sendStatus(401);
    }
}

const viewMatch = (req, res, next) => {
    if (req.user._id) {
        User
            .findById(req.user._id)
            .populate('matches', 'users -_id')
            .populate({
                path: 'matches',
                populate: {
                    path: 'users'
                }
            })
            .select('matches -_id')
            .then(user => {
                res.json(user)
            })
    }
}

const like = (req, res, next) => {
    if (req.user) {
        User.findByIdAndUpdate(req.user._id, { $addToSet: { likes: req.params.id } }, { new: true })
            .then(userUpdate => {
                // console.log(userUpdate)
                res.status(200).json(userUpdate)
            })
            .catch((err) => {
                if (err.code === 11000) {
                    res.status(400).json({ message: "No se han podido actualizar los likes del usuario" })
                } else {
                    next(err);
                }
            })

    }

}

const dislike = (req, res, next) => {

    if (req.user) {
        User.findByIdAndUpdate(req.user._id, { $addToSet: { dislikes: req.params.id } }, { new: true })
            .then(userUpdate => {
                // console.log(userUpdate)
                res.status(200).json(userUpdate)
            })
            .catch((err) => {
                if (err.code === 11000) {
                    res.status(400).json({ message: "No se han podido actualizar los dislikes del usuario" })
                } else {
                    next(err);
                }
            })
    }

}

const match = async (req, res, next) => {
    try {
        const { user2 } = req.body
        const userFind = await User.findOne({ likes: { $in: [req.user._id] }, _id: user2 })
        if (userFind) {
            const matchData = await MatchModel.create({ users: [req.user._id, user2] })
            const match = matchData._id
            await User.findByIdAndUpdate(req.user._id, { $addToSet: { matches: match } }, { new: true })
            await User.findByIdAndUpdate(user2, { $addToSet: { matches: match } }, { new: true })
            res.status(201).json({ message: "MATCH" })
        } else {
            // console.log("has fallao")
            res.status(200).json();
        }

    } catch (error) {
        next(error)
    }
}



module.exports = {
    getPeople,
    getPerson,
    updateProfile,
    deleteProfile,
    getUser,
    like,
    dislike,
    match,
    viewMatch
};
