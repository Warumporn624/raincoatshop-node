const express = require('express')
const router = express.Router()

const { 
    getOrderAdmin,
    getPayment,
    changeOrderStatus,
    searchOrders,
    updateTrackingNumber
} = require('../controllers/admin.controller')

// middleware
const { auth, adminCheck } = require('../middleware/auth.middleware')

// @Endpoint: http://localhost:5000/api/admin/orders 
// @Method: GET
// @Access: private 
router.get('/admin/orders', auth, adminCheck, getOrderAdmin);

// @Endpoint: http://localhost:5000/api/admin/orders
// @Method: POST
// @Access: private 
router.post('/admin/orders', auth, adminCheck, searchOrders);

// @Endpoint: http://localhost:5000/api/admin/check-payment
// @Method: GET
// @Access: private 
router.get('/admin/check-payment', auth, adminCheck, getPayment);

// @Endpoint: http://localhost:5000/api/change-order-status
// @Method: POST
// @Access: private 
router.post('/change-order-status', auth, changeOrderStatus);

// @Endpoint: http://localhost:5000/api/change-tracking
// @Method: POST
// @Access: private 
router.post('/change-tracking', auth, adminCheck, updateTrackingNumber);

module.exports = router
