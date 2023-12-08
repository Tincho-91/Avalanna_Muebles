const express = require('express');
const router = express.Router();
const productController = require("../controllers/productsController")


/* GET home page. */

router.get('/detail/:id', productController.detail);

router.get('/productCart', productController.cart)


module.exports = router;
