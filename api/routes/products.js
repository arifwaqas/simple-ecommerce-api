const express = require('express')

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


router.post('/:orderId', (req,res,next) => {
    const product = {
        name: req.body.name,
        id: req.body.id,
    }

    if(product){
        res.status(201).json({
        message: "Details of the order id",
        productInfo: product
        });
    }
    else res.status(201).json({
        message: "JSON for creation data not found."
    });
    
    
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
