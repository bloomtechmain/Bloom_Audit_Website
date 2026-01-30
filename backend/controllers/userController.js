const userModel = require('../models/userModel');

const updatePackage = async (req, res) => {
    const { package_name, package_price } = req.body;
    const userId = req.user.id;

    if (!package_name || !package_price) {
        return res.status(400).json({ message: 'Package details required' });
    }

    try {
        const updatedUser = await userModel.updateUserPackage(userId, package_name, package_price);
        res.json(updatedUser);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = {
    updatePackage
};
