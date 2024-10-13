module.exports = app => {
    const propietario = require("../controllers/propietario.controller.js");

    var router = require("express").Router();

    // Crear un nuevo propietario
    router.post("/", propietario.create);

    // Obtener todos los propietarios
    router.get("/", propietario.findAll);

    // Obtener un propietario por ID
    router.get("/:id", propietario.findOne);

    // Actualizar un propietario
    router.put("/:id", propietario.update);

    // Eliminar un propietario
    router.delete("/:id", propietario.delete);

    app.use('/api/propietarios', router);
};
