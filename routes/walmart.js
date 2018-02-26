var express = require('express');
var router = express.Router()
var walmartController = require('../controllers/walmart')

router.get('/', walmartController.getProducts)

module.exports = router;