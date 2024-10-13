const express = require("express");
const cors = require("cors"); // Importa el paquete cors
const app = express();

// Configura CORS para permitir solicitudes desde cualquier origen
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = require("./models");

// Sincronizar la base de datos
db.sequelize.sync({ force: true }) // Cambia a true solo para desarrollo
    .then(() => {
        console.log("Sincronización de la base de datos realizada");
        // Iniciar el servidor solo después de que la base de datos esté sincronizada
        const PORT = process.env.PORT || 8080;
        app.listen(PORT, () => {
            console.log(`El servidor está corriendo en el puerto ${PORT}.`);
        });
    })
    .catch(err => {
        console.error("Error al sincronizar la base de datos:", err);
    });

app.get("/", (req, res) => {
    res.json({ message: "Has entrado en la parte más visible de la APP" });
});

// Asegúrate de que tus rutas estén bien definidas
require("./routes/mascotas.routes")(app);
require("./routes/propietario.routes")(app);
