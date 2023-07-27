const express = require('express')
const createUser = require('../controller/createUser')
const userLogin = require('../controller/userLogin')
const addBooks = require('../controller/addBooks')
const getBooks = require('../controller/getBooks')
const editBooks = require('../controller/editBooks')
const deleteBook = require('../controller/deleteBook')
const tokenVerification = require('../middleware/tokenVerification')
const viewbook = require('../controller/viewbook')
const addCart = require('../controller/addCart')
const cartDocumentsCount = require('../controller/cartDocumentsCount')
const deleteCart = require('../controller/deleteCart')
const getBookById = require('../controller/getBookById')
const allOrders = require('../controller/allOrders')
const addOrder = require('../controller/addOrder')
const upload = require("../middleware/multer");
const orderDelivery = require('../controller/orderDelivery')
const adminPurchaseBook = require('../controller/adminPurchaseBook')
const getEmployee = require('../controller/getEmployee')
const addEmployee = require('../controller/addEmployee')

const router = express.Router()
const middleware = [tokenVerification]

router.route('/signup').post(createUser)
router.route('/login').post(userLogin)
router.route('/addbooks').post(upload.single("file"),addBooks)
router.route('/getbooks').get(getBooks)
router.route('/editbook').put(editBooks)
router.route('/deletebook/:id').delete(deleteBook)
router.route('/viewbook/:id').get(viewbook)
router.route('/addCart').post(addCart)
router.route('/getbooks/:title').get(getBooks)
router.route('/cartCount/:id').get(cartDocumentsCount)
router.route('/deleteCart/:id').delete(deleteCart)
router.route('/getBookById/:id').get(getBookById)
router.route('/Allorders').get(allOrders)
router.route('/addOrder').post(addOrder)
router.route('/orderDelivery').put(orderDelivery)
router.route('/getPurchaseBook').get(adminPurchaseBook)
router.route('/getEmployee').get(getEmployee)
router.route('/addEmployee').post(addEmployee)

module.exports = router