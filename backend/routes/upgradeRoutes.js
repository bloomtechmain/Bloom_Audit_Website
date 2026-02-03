const express = require('express');
const router = express.Router();
const { submitUpgradeRequest, getUpgradeRequests, handleUpgradeRequestStatus } = require('../controllers/upgradeController');

router.post('/request', submitUpgradeRequest);
router.get('/', getUpgradeRequests);
router.put('/:id/status', handleUpgradeRequestStatus);

module.exports = router;
