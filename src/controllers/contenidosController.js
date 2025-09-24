const pool = require("../db");

const getContenidos = async (req, res) => {
    try {
        const result = await pool.query("SELECT * from contenidos");
        res.json(result.rows);
    }catch (err) {
        console.error(err);
        res.status(500).send("Error en el servidor");
    }
};

module.exports = {
    getContenidos
};