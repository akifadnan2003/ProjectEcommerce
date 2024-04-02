const express = require('express');
const customerController = require("../controllers/customerController.js");

const router = express.Router();

router.get('/', customerController.homepage);

module.exports = router;