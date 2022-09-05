export const express = require('express');
export const router = express.Router();

const test = require('../Controllers/test');
router.get('/', test.test);

const getUserProtocols = require("../Controllers/getUserProtocols");
router.get('/getUserProtocols/:username', getUserProtocols.getUserProtocols);

const getUserActiveProtocols = require("../Controllers/getUserActiveProtocols");
router.get('/getUserActiveProtocols/:username', getUserActiveProtocols.getUserActiveProtocols);

module.exports = router;
