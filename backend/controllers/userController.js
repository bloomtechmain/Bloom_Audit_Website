const userModel = require('../models/userModel');

const updatePackage = async (req, res) => {
    const { package_name } = req.body;
    const userId = req.user.id;

    if (!package_name) {
        return res.status(400).json({ message: 'Package name required' });
    }

    try {
        const updatedUser = await userModel.updateUserPackage(userId, package_name);
        res.json(updatedUser);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = {
    updatePackage
};
