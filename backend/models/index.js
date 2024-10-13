const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    //operatorsAliases: false,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

// Verificar la conexión
sequelize.authenticate()
    .then(() => {
        console.log("Conexión a la base de datos establecida correctamente.");
    })
    .catch(err => {
        console.error("No se pudo conectar a la base de datos:", err);
    });

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Importamos los modelos de las tablas.
db.propietarios = require("./propietario.model.js")(sequelize, Sequelize);
db.mascotas = require("./mascotas.model.js")(sequelize, Sequelize);

db.mascotas.belongsTo(db.propietarios, { foreignKey: "id_propietario" });
db.propietarios.hasMany(db.mascotas, { foreignKey: "id_propietario" });


module.exports = db;
