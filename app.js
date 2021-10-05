const express = require('express');
const morgan = require('morgan');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

const productsRoute = require('./api/routes/products');
const ordersRoute = require('./api/routes/orders');

app.use('/products', productsRoute);

app.use('/orders', ordersRoute);

// For routes that demand something else 
app.use((req, res, next) => {
    res.status(200).json({
        message: "server connected"
    });
    const error = new Error('Not found');
    error.status = 404;
    next(error)
});

app.use((err, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
})


module.exports = app;