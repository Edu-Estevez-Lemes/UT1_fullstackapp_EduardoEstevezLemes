const db = require("../models");
const Mascota = db.mascotas;


exports.create = (req, res) => {
    if(!req.body.nombre || !req.body.tipo || !req.body.raza || !req.body.sexo || !req.body.edad || !req.body.serial_chip || !req.body.id_propietario) { // Validar que los campos necesarios estén presentes
        res.status(400).send({
            message: "El contenido no puede estar vacío"
        });
        return;        
    }
// Crear el objeto mascota con los datos que vienen en la petición
    const mascota = {
        nombre: req.body.nombre,
        tipo: req.body.tipo,
        raza: req.body.raza,
        sexo: req.body.sexo,
        edad: req.body.edad,
        serial_chip: req.body.serial_chip,
        id_propietario: req.body.id_propietario
    };

    Mascota.create(mascota)
    .then(data => {
        res.send(data);
    })
    .catch(err=> {
        res.status(500).send({
            message:
            err.message || "A ocurrido algún error mientras se creaba la mascota."
        });
    });
};

exports.findAll = (req, res) => {
    Mascota.findAll()
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || "A ocurrido algún error mientras buscaba mascotas."
        });
    });
};

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

exports.update = (req, res) => {

    const id = req.params.id;

    Mascota.update(req.body, {
        where: { id: id }
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "La mascota fue actualizada correctamente."
            });
        } else {
            res.send({
                message: `No se pudo actualizar la mascota con id=${id}. Puede que no se haya encontrado o que el cuerpo de la solicitud esté vacío.`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error al actualizar la mascota con id=" + id
        });
    });

};

exports.delete = (req, res) => {
    const serialChip = req.params.serial_chip; // Obtiene el serial_chip del parámetro de la URL

    Mascota.destroy({
        where: { serial_chip: serialChip } // Asegúrate de que esta sea la columna correcta
    })
    .then(num => {
        if (num === 1) {
            res.send({ message: "Mascota eliminada correctamente." });
        } else {
            res.status(404).send({ message: `No se encontró mascota con serial_chip=${serialChip}.` });
        }
    })
    .catch(err => {
        res.status(500).send({ message: "Error al eliminar la mascota." });
    });

    
};