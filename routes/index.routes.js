const router = require("express").Router();
const {
  signUp,
  login,
} = require('../controller/user.controller');


/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});


// router.get("/signup", (req, res, next) => {

// })

// router.get("/login", (req, res, next) => {

// })

//la del logout (mirar lo de los tokens?)

router.post('/login', login)

router.post('/signup', signUp)

module.exports = router;
