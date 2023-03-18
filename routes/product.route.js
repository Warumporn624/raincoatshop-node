const express = require('express')
const router = express.Router()

// controller
const {
    create,
    list,
    listAll,
    remove,
    read,
    update,
    listBy,
    searchFilters,
    listColor,
    changeEnabledProduct
     } = require('../controllers/product.controller')

// middleware
const { auth, adminCheck } = require('../middleware/auth.middleware')


// @Endpoint: http://localhost:5000/api/product
router.post('/product', auth, adminCheck, create);
router.get('/product/:count', list);
router.get('/all-product/', listAll);
router.delete('/product/:id', auth, adminCheck, remove);

// Update Product
// @Endpoint: http://localhost:5000/api/products
router.get('/products/:id', read);
router.put('/product/:id', auth, adminCheck, update);

// @Endpoint: http://localhost:5000/api/productby
// @Method: POST
// @Access: public 
router.post('/productby', listBy);

// Search
// @Endpoint: http://localhost:5000/api/search/filters
// @Method: POST
// @Access: public 
router.post('/search/filters', searchFilters);

//list color
// @Endpoint: http://localhost:5000/api/product-color
// @Method: get
// @Access: public 
router.get('/product-color', listColor);

router.post('/change-enabled-product',auth, adminCheck, changeEnabledProduct);


module.exports = router; 