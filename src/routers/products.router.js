import express from 'express';
import ProductManager from '../controllers/productManager.js';

const manager = new ProductManager('../models/products.json');
const router = express.Router();

router.post('/', async (req, res) => {
    const newProduct = req.body;
    try {
        await manager.addProduct(newProduct);
        res.status(201).send('Producto agregado con éxito');
    } catch (error) {
        res.status(500).json({ status: 'error', message: error.message });
    }
});

router.get('/', async (req, res) => {
    const { limit } = req.query;
    try {
        const arrayProduct = await manager.getProducts();
        if (limit) {
            res.send(arrayProduct.slice(0, parseInt(limit)));
        } else {
            res.send(arrayProduct);
        }
    } catch (error) {
        res.status(500).send('Error del servidor');
    }
});

router.get('/:pid', async (req, res) => {
    const id = parseInt(req.params.pid);
    try {
        const product = await manager.getProductById(id);
        if (!product) {
            res.status(404).send('Producto no encontrado');
        } else {
            res.send(product);
        }
    } catch (error) {
        res.status(500).send('Error en el servidor');
    }
});

export default router;