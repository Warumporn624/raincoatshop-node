const express = require('express')
const router = express.Router()

// controller
const {
createImage,
removeImage
     } = require('../controllers/cloudinary.controller')

// middleware
const { auth } = require('../middleware/auth.middleware')

// @Endpoint: http://localhost:5000/api/images
// @Method: POST
// @Access: private 
router.post('/images', auth, createImage);

// @Endpoint: http://localhost:5000/api/removeimages
// @Method: POST
// @Access: private 
router.post('/removeimages', auth, removeImage);

module.exports = router;