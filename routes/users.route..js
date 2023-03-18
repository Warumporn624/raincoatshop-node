const express = require('express')
const router = express.Router()

// controller
const { 
    listUsers, 
    readUsers, 
    updateUsers, 
    removeUsers,
    changeEnabled,
    changeRole,
    userCart,
    getUserCart,
    saveInformAddress,
    getInformAddress,
    saveOrder,
    emptyCart,
    addWishList,
    getWishList,
    removeWishList,
    getOrder,
    getInvoice,
    createPayment
} = require('../controllers/users.controller')

// middleware
const { auth, adminCheck } = require('../middleware/auth.middleware')


// @Endpoint: http://localhost:5000/api/users
// @Method: GET
// @Access: private 
router.get('/users', auth, adminCheck, listUsers);

// @Endpoint: http://localhost:5000/api/users/:id
// @Method: GET
// @Access: private 
router.get('/users/:id', readUsers);

// @Endpoint: http://localhost:5000/api/users/:id
// @Method: PUT
// @Access: private 
router.put('/users/:id', updateUsers);

// @Endpoint: http://localhost:5000/api/users/:id
// @Method: DELETE
// @Access: private 
router.delete('/users/:id', removeUsers);

// @Endpoint: http://localhost:5000/api/change-enabled
// @Method: POST
// @Access: private 
router.post('/change-enabled',auth, adminCheck, changeEnabled);

// @Endpoint: http://localhost:5000/api/change-enabled
// @Method: POST
// @Access: private 
router.post('/change-role',auth, adminCheck, changeRole);

// @Endpoint: http://localhost:5000/api/user/cart
// @Method: POST/GET
// @Access: private 
router.post('/user/cart',auth, userCart);
router.get('/user/cart',auth, getUserCart);
router.delete('/user/cart',auth, emptyCart);

// @Endpoint: http://localhost:5000/api/user/informAdress
// @Method: GET, POST
// @Access: private
router.post('/user/informAddress',auth, saveInformAddress);
router.get('/user/informAddress',auth, getInformAddress);

// @Endpoint: http://localhost:5000/api/user/order
// @Method: GET, POST
// @Access: private
router.post('/user/order',auth, saveOrder);
router.get('/user/orders',auth, getOrder);

//wishlist
// @Endpoint: http://localhost:5000/api/user/wishlist
// @Method: GET, POST, PUT
// @Access: private
router.post('/user/wishlist',auth, addWishList);
router.get('/user/wishlist',auth, getWishList);
router.put('/user/wishlist/:productId',auth, removeWishList);

// @Endpoint: http://localhost:5000/api/user/invoice/:id
// @Method: GET
// @Access: private
router.get('/user/invoice/:id',auth, getInvoice);

// @Endpoint: http://localhost:5000/api/user/payment
// @Method: POST
// @Access: private
router.post('/user/payment', auth, createPayment);

module.exports = router


