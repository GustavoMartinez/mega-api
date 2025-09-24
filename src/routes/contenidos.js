const express = require("express");
const router = express.Router();
const {
    getContenidos
} = require("../controllers/contenidosController");

router.get("/", getContenidos);

module.exports = router;