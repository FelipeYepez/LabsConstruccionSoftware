const express = require('express');
const router = express.Router();

const errorController = require('../controllers/errorController');

router.use('/', errorController.getError404);

module.exports = router;