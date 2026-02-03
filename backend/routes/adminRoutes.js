const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const { protect, admin } = require('../middleware/authMiddleware');

router.get('/users', protect, admin, adminController.getUsers);
router.post('/confirm-package', protect, admin, adminController.confirmPackage);
router.delete('/users/:id', protect, admin, adminController.deleteUser);
router.put('/users/:id', protect, admin, adminController.updateUserDetails);
router.post('/update-package', protect, admin, adminController.updatePackage);
router.get('/stats', protect, admin, adminController.getDashboardStats);

module.exports = router;
