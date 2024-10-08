// Importacion de mongoose
import mongoose from 'mongoose'

// Datos para la conexion con la base de datos.
const userName = 'soymigueprogramador'; 
const clave = 'loquiero3d';
const nameDB = 'MG-lo-quiero-3D-dataBase'

// Configuracion de la conexion a la base de datos.
mongoose.connect(`mongodb+srv://${userName}:${clave}@mg-lo-quiero-3d-databas.ph2h9f6.mongodb.net/?retryWrites=true&w=majority&appName=${nameDB}`)
    .then(() => console.log('¡conectado!'))
    .catch(() => console.log('¡No conectado!'));

    const config = {
        userName,
        clave,
        nameDB,
    };

export default config;