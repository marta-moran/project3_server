const router = require('express').Router();

const {
    getPeople,
    getPerson,
    updateProfile,
    deleteProfile,
    getUser
} = require('../controller/user.controller');

router.get('/me', getUser)

/**
 * GET
 */
router.get('/', getPeople); /* Saca a los usuarios, habrá que sacar usuarios de uno en uno*/

router.get('/:id', getPerson); /* Ver un usuario en concreto*/


/**
 * PUT
 */
router.put('/edit/:id', updateProfile); /* Actualizar tu usuario */

/**
 * DELETE
 */
router.delete('/delete/:id', deleteProfile); /* Borrar tu cuenta */


module.exports = router;