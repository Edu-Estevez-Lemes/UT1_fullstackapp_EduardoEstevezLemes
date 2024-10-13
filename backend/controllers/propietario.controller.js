const db = require("../models");
const Propietario = db.propietarios;

exports.create = (req, res) => {
    // Validaciones aquí
    const propietario = {

        nombre: req.body.nombre,
        apellidos: req.body.apellidos,
        dni: req.body.dni,
        direccion: req.body.direccion,
        telefono: req.body.telefono,
        correo: req.body.correo         // Clave foránea
    };

    Propietario.create(propietario)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error al crear el propietario."
            });
        });
};
// Obtener todos los propietarios
exports.findAll = (req, res) => {
    Propietario.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Ha ocurrido un error mientras se buscaban propietarios."
            });
        });
};
// Obtener un propietario por ID
exports.findOne = (req, res) => {
    const id = req.params.id;

    Propietario.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `No se encontró propietario con id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error al obtener propietario con id=" + id
            });
        });
};

// Actualizar un propietario
exports.update = (req, res) => {
    const id = req.params.id;

    Propietario.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "El propietario fue actualizado correctamente."
                });
            } else {
                res.send({
                    message: `No se pudo actualizar el propietario con id=${id}. Puede que no se haya encontrado o que el cuerpo de la solicitud esté vacío.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error al actualizar el propietario con id=" + id
            });
        });
};

// Eliminar un propietario
exports.delete = (req, res) => {
    const dni = req.params.dni; // Obtener el DNI del parámetro de la URL

    Propietario.destroy({
        where: { dni: dni } // Usar el DNI como condición para la eliminación
    })
        .then(num => {
            if (num === 1) {
                res.send({
                    message: "Propietario eliminado correctamente."
                });
            } else {
                res.status(404).send({
                    message: `No se encontró propietario con DNI=${dni}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error al eliminar el propietario."
            });
        });
};