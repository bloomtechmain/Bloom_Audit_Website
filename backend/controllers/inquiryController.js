const { createInquiry } = require('../models/inquiryModel');

const submitInquiry = async (req, res) => {
    try {
        const { name, email, phone, companyName, requirements } = req.body;

        if (!name || !email || !phone || !companyName || !requirements) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        const inquiry = await createInquiry({ name, email, phone, companyName, requirements });
        
        res.status(201).json({ message: 'Inquiry submitted successfully', inquiry });
    } catch (error) {
        console.error('Inquiry submission error:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = { submitInquiry };
