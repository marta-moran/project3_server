const validateToken = require('../middleware/validateToken.middleware')
const router = require('express').Router();

const {
    getPeople,
    getPerson,
    updateProfile,
    deleteProfile,
    getUser,
    like,
    dislike,
    match,
    viewMatch,
    listMessages,
    saveMessage
} = require('../controller/user.controller');

router.get('/me', getUser)

router.get('/', getPeople); /* Saca a los usuarios, habrá que sacar usuarios de uno en uno*/

router.get('/messages/:id', listMessages)

router.put('/saveMessage/:id', saveMessage)

router.put('/profile/edit', validateToken, updateProfile); /* Actualizar tu usuario */

router.delete('/profile/delete', deleteProfile); /* Borrar tu cuenta */

router.get('/viewMatches', viewMatch); // ver matches 

router.get('/:id', getPerson); /* Ver un usuario en concreto*/

router.put('/like/:id', like); /* Actualizar tu usuario */

router.put('/dislike/:id', dislike); /* Actualizar tu usuario */

router.put('/match', match);


module.exports = router;