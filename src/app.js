// Importaciones
import express from "express";
import path from 'path';
import ExpressHandlebars from "express-handlebars";
import productsRouter from './routers/products.router.js';
import cardRouter from './routers/card.router.js'; 
import { __dirname } from './utils.js';
import config from './config/db.config.js';
import cors from 'cors'

// Configuraciones básicas como el puerto, express y nombre del proyecto.
const NAME_ECOMMERCE = 'MG lo quiero 3D';
const PORT = 8080;
const app = express();

// Configuración de handlebars como motor de plantilla.
/*app.engine('handlebars', ExpressHandlebars.engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));*/

// Middlewares
app.use(express.urlencoded({ extended: true }));
//app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173'
}));
// app.use(cors());

app.use(express.static(path.join(__dirname, 'frontend/build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend/build', 'index.html'));
});





// Rutas
app.use('/api/products', productsRouter);
app.use('/api/card', cardRouter);

// Ruta para el home
app.get('/', (req, res) => {
    res.send('API esta prendida');
});

// Manejador para rutas no encontradas (404)
app.use((req, res) => {
    res.status(404).render('404', { layout: false });
});

// Manejador de errores general
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Algo salió mal!');
});

// Levantamos el servidor en el puerto especificado
app.listen(PORT, () => {
    console.log(`${NAME_ECOMMERCE} está funcionando en el puerto http://localhost:${PORT}`);
});
