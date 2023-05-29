const express = require('express');
const router  = express.Router();
const {homePage,aboutPage} = require('../controllers/index')

router.route('/').get(homePage);
router.route('/about').get(aboutPage);


module.exports = router