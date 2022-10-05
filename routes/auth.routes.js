const router = require("express").Router();

const {
  signUp,
  login,
} = require('../controller/auth.controller');

router.post('/login', login)

router.post('/signup', signUp)

module.exports = router;
