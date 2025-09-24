const express = require("express");
const contenidosRoutes = require("./routes/contenidos");

const app = express()
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("MEGA API")
});

app.use("/api/contenidos", contenidosRoutes);

app.listen(PORT, () => {
    console.log('Server up on http://localhost:${PORT}');
});