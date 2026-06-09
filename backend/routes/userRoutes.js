const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');

router.post('/activate-upgrade', protect, userController.activateUpgrade);
router.post('/update-package', protect, userController.updatePackage);

module.exports = router;
