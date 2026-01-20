const express = require('express');
const router = express.Router();
const adminCtrl = require('../controllers/adminController');

router.post('/login', adminCtrl.login);
router.post('/add-product', adminCtrl.addProduct);
router.put('/update-product', adminCtrl.updateProduct);
router.delete('/delete-product', adminCtrl.deleteProduct);
router.get('/orders', adminCtrl.getOrders);

module.exports = router;
