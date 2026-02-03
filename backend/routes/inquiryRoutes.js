const express = require('express');
const router = express.Router();
const { submitInquiry } = require('../controllers/inquiryController');

router.post('/enterprise', submitInquiry);

module.exports = router;
