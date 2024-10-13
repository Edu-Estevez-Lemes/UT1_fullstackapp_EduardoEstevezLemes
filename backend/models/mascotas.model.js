module.exports = (sequelize, Sequelize) => {
    const Mascota = sequelize.define("mascota", {

        id: { 
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nombre: {
            type: Sequelize.STRING
        },
        tipo: {
            type: Sequelize.STRING
        },
        raza: {
            type: Sequelize.STRING
        },
        sexo: {
            type: Sequelize.STRING
        },
        edad: {
            type: Sequelize.INTEGER
        },
        serial_chip: {
            type: Sequelize.STRING
        },

        id_propietario: {
            type: Sequelize.INTEGER,
            allowNull:false,
            references: {
            model: 'propietarios',
            key: 'id',
        },
        allowNull: false
        }

    });

    return Mascota
};