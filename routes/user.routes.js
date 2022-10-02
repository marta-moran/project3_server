const router = require('express').Router();

const {
    getPeople,
    getPerson,
    updateProfile,
    deleteProfile,
    getUser,
    like
} = require('../controller/user.controller');

router.get('/me', getUser)

router.get('/', getPeople); /* Saca a los usuarios, habrá que sacar usuarios de uno en uno*/

router.get('/:id', getPerson); /* Ver un usuario en concreto*/

router.put('/edit/:id', updateProfile); /* Actualizar tu usuario */

router.put('/like/:id', like); /* Actualizar tu usuario */

router.delete('/delete/:id', deleteProfile); /* Borrar tu cuenta */


module.exports = router;