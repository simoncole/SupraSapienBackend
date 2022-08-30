"use strict";
const express = require('express');
const router = express.Router();
const test = require('../Controllers/test');
router.get('/', test.test);
module.exports = router;
