// Importaciones. ``
import express from "express";

// Constantes.
const nameEcommerce = 'MG lo quiero 3D';
const PORT = 8080;
const app = express();

// Users.
app.use( express.urlencoded({ extended: true }));

// Endpoint.
app.get('/', ( req, res )=> {
    res.send(`Bienvenidos a ${nameEcommerce}`); 
});

app.listen(PORT, ( req, res ) => {
    console.log(` ${nameEcommerce} Esta funcionando en el puerto http://localhost:${PORT} `)
});