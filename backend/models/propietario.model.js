module.exports = (sequelize, Sequelize) => {
    const Propietario = sequelize.define("propietario", {

        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        dni: {
            type: Sequelize.STRING,
            unique: true,
            allowNull: false // Asegúrate de que el DNI sea obligatorio
        },
        nombre: {
            type: Sequelize.STRING,
            allowNull: false
        },
        apellidos: {
            type: Sequelize.STRING,
            allowNull: false
        },
        direccion: {
            type: Sequelize.STRING,
            allowNull: false
        },
        telefono: {
            type: Sequelize.STRING,
            allowNull: false
        },
        correo: {
            type: Sequelize.STRING
            
        }
    });

    return Propietario;
};