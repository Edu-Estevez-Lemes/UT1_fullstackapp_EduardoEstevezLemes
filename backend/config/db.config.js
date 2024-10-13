module.exports = {

    HOST:"localhost",
    USER:"root",
    PASSWORD:"Minotauro",
    DB:"db_mascotas",
    dialect: "mysql",
    port:8080,
    pool: {
        max:5,
        min:0,
        acquire: 30000,
        idle: 10000
    }
};