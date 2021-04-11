const express = require('express');
const router = express.Router();

const usersController = require('../controllers/usersController');

const isAuth = require('../util/is-auth');

router.get('/login', usersController.getLogin);

router.post('/login', usersController.postLogin);

// Proteger ruta logout, solo si el usuario ya ingresó
router.get('/logout', isAuth, usersController.getlogout);

router.get('/register', usersController.getRegister);

router.post('/register', usersController.postRegister);

module.exports = router;