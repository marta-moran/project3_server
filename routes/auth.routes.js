const router = require("express").Router();

const {
  signUp,
  login,
} = require('../controller/auth.controller');


/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.post('/login', login)

router.post('/signup', signUp)

module.exports = router;
