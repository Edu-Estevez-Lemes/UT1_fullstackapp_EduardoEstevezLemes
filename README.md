# UT1_fullstackapp_EduardoEstevezLemes

Título del Proyecto: The Mascotas

Desarrollo de una app de gestión de clínicas veterinarias (Pacientes, propietarios, pagos, citas)
Uso simple y sencillo del aplicativo tanto en un navegador web como en un dispositivo móvil.

Comenzando:
Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas.


Pre-requisitos:
Necesitas tener instalados los siguientes software para poder ejecutar la aplicación:

    - Node.js (>=14.x.x) y npm (>=6.x.x)
    - Ionic CLI para ejecutar y construir la app
    - Angular CLI para gestionar el frontend
    - Git para clonar el repositorio

INSTALACIÓN:

Instalación de Node.js y npm:

Descarga Node.js y npm desde [su sitio oficial.](https://nodejs.org/)

Instalación de Ionic y Angular CLI:
Ejecuta los siguientes comandos para instalar Ionic y Angular globalmente en tu sistema:
    npm install -g @ionic/cli
    npm install -g @angular/cli

GIT CLONE:
Sigue estos pasos para tener un entorno de desarrollo funcionando localmente: 
    git clone https://github.com/Edu-Estevez-Lemes/UT1_fullstackapp_EduardoEstevezLemes.git

Instala las dependencias del proyecto:

En el directorio del proyecto, ejecuta el siguiente comando para instalar las dependencias de frontend y backend:
    cd ../frontend
    npm install

Luego, en el directorio del backend:
    cd ../backend
    npm install -- Descarga de todas las dependencias necesarias basadas en los .json


Configura la base de datos:

Crea una base de datos MySQL llamada db_mascotas.
Configura la conexión a la base de datos MySQL en el archivo backend/config/db.config.js. Asegúrate de ingresar el nombre de usuario, contraseña y nombre de la base de datos correctos.

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

Ejecuta el servidor backend:

En el directorio backend, ejecuta:
    node index.js
dirección: (http://localhost:8080)

Intalación de POSTMAN (https://www.postman.com/downloads/)

ENLACES POSTMAN A LOS ENDPOINTS:
    Mascotas: http://localhost:8080/api/mascotas/

            POST: {  
                 
                "nombre": " ",
                "tipo": " ",
                "raza": " ",
                "sexo": " ",
                "edad": 0,
                "serial_chip": " ",
                "id_propietario": 0
                }

            DELETE: http://localhost:8080/api/mascotas/serial_chip -- example (FM25852369) //Borramos los registros de Mascotas por el numero de chip
            PUT: {
                "nombre": " "    //Seleccionamos el/los parámetro/s a actualizar.
                }

    Propietarios: http://localhost:8080/api/propietarios/

            POST: {
   
                "dni": " ",
                "nombre": " ",
                "apellidos": " ",        
                "direccion": " ",
                "telefono": " ",
                "correo": " "
                }
            
            DELETE: http://localhost:8080/api/propietarios/dni -- example(21546689L)
            PUT: Igual que es mascotas

Ejecuta el frontend:

En el directorio frontend, ejecuta:
    ionic serve        
    NOTA: El frontend está incompleto e inservible. Si tienes datos en las tablas te muestra el parámetro nombre, pero no se pueden hacer los CRUDS en el Frontend.


Herramientas y frameworks utilizados para el desarrollo del proyecto:

        Ionic - Framework para el desarrollo de aplicaciones híbridas
        Angular - Framework para el frontend
        Node.js - Entorno para el backend
        Express - Framework para la API REST
        MySQL - Sistema de gestión de bases de datos relacional


Autores:

Eduardo Estévez Lemes - Desarrollo principal - Edu-Estevez-Lemes