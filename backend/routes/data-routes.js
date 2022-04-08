const express = require('express');

const router = express.Router();

const dataCTRL = require('../controllers/data-controllers');

router.get('/', dataCTRL.getAllData);

module.exports = router;
