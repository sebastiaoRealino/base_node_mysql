import express from 'express';
import ProductsController from '../controllers/products';
import Product from '../models/product';

// const router = express.Router();
// const productsController = new ProductsController(Product);
// router.get('/', (req, res) => productsController.getAll(req, res));

export default (app)=>{ 
    app.route('/products')
    .get((req,res) =>{
        res.json('lista de produtos')
    }); 

    app.route('/product')
    .post((req,res) =>{
        res.json('post')
    });
};