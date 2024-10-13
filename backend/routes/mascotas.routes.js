module.exports = app => {
    const Mascota = require ("../controllers/mascotas.controller.js");

    var router = require("express").Router();

    router.post("/", Mascota.create);

    router.get("/", Mascota.findAll);

    router.get("/:id", Mascota.findOne);

    router.put("/:id", Mascota.update);

    router.delete("/:serial_chip", Mascota.delete);

    app.use("/api/mascotas", router);

};