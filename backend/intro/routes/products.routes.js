const express = require("express");

const router = express.Router();

const { createProduct } = require("../controller/product.controller");

router.post("/create", createProduct);
router.get("/get",;
});

module.exports = router;
