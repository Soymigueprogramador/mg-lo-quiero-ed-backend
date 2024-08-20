// Importaciones
import express from "express";
import productsRouter from './routers/products.router.js';
import cardRouter from './routers/card.router.js'; 
import ExpressHandlebars from "express-handlebars";
import { __dirname } from './utils.js';
import path from 'path';

// Confiuraciones basicas como el puerto, express y nombre del proyecto.
const nameEcommerce = 'MG lo quiero 3D';
const PORT = 8080;
const app = express();

// Condifuracion de handlebars como motor de plantilla.
app.engine('handlebars', ExpressHandlebars.engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

// Middlewares.
app.use(express.urlencoded({ extended: true }));
//app.use(express.static('public'));
app.use(express.json());
app.use('/api/products', productsRouter);
app.use('/api/card', cardRouter);

// Ruta para el home.
app.get('/', (req, res) => {
    res.render('index');
});

// Levantamos el puerto en el que se esta escuchando el proyecto.
app.listen(PORT, () => {
    console.log(`${nameEcommerce} está funcionando en el puerto http://localhost:${PORT}`);
});