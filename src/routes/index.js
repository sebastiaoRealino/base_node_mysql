import express from 'express';
import productsRoute from './products';

// const router = express.Router();

// router.get('/', (req, res) => res.send('Welcome to MOBQI API'));
// router.use('/products', productsRoute);

export default (app)=>{
    productsRoute(app);
};
