const express = require('express');
const router = express.Router();
const {dashboard,dashboardViewNote,dashboardUpdateNote,dashboardDeleteNote,dashboardAddNotePage,dashboardAddNote,dashboardGetSearch,dashboardSearch} = require('../controllers/dashboard');
const {isLoggedIn} = require('../middlewares/checkAuth');

//Dashboard Route
router.route('/dashboard').get(isLoggedIn,dashboard)
router.route('/dashboard/item/:id').get(isLoggedIn,dashboardViewNote)
router.route('/dashboard/item/:id').put(isLoggedIn,dashboardUpdateNote)
router.route('/dashboard/item-delete/:id').delete(isLoggedIn,dashboardDeleteNote)


router.route('/dashboard/add').get(isLoggedIn,dashboardAddNotePage)
router.route('/dashboard/add').post(isLoggedIn,dashboardAddNote)


router.route('/dashboard/search').get(isLoggedIn,dashboardSearch)
router.route('/dashboard/search').post(isLoggedIn,dashboardGetSearch)




module.exports = router

