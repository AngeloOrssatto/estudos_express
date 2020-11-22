const express = require('express');
const routes = express.Router();
const ProductController = require('../src/controllers/ProductController');
const ClientController = require('../src/controllers/ClientController');

//Rotas produtos
routes.get('/products', ProductController.index);
routes.get('/products/:id', ProductController.show);
routes.post('/products', ProductController.store);
routes.put('/products/:id', ProductController.update);
routes.delete('/products/:id', ProductController.destroy);

//Rotas clientes
routes.get('/clients', ClientController.index);
routes.get('/clients/:id', ClientController.show);
routes.post('/clients', ClientController.store);
routes.put('/clients/:id', ClientController.update);
routes.delete('/clients/:id', ClientController.destroy);

module.exports = routes;