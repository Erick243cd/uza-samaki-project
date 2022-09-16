const express = require('express');
const router = express.Router();
const pageController =  require('../controllers/Pages');


router.get('/', pageController.home);
router.get('/contact', pageController.contact);
router.get('/about', pageController.about);

module.exports = router;