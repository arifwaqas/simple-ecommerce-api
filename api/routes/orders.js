const express = require('express');
const { route } = require('./products');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: "Products were fetched"
    });
});

router.post('/', (req, res, next) => {
    res.status(201).json({
        message: "Products were created"
    });
});

router.delete('/:orderId', (req,res,next) => {
    
    const orderid = req.params.orderId

    res.status(200).json({
        message: "order successfully deleted"
    })
    
});

router.get('/:orderId', (req, res, next)=> {

    const productid = req.params.productId

    if(productid === 'special'){
        res.status(201).json({
            message: "You have reached the special route"
        });
    } else {
        res.status(201).json({
            message: "Product id required is fetched"
        })
    }
});


module.exports = router;
