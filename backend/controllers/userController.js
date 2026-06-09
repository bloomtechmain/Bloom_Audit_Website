const userModel = require('../models/userModel');
const db = require('../config/db');

const activateUpgrade = async (req, res) => {
    const { packageName, packagePrice, billingCycle } = req.body;
    const userId = req.user.id;

    if (!packageName || !packagePrice || !billingCycle) {
        return res.status(400).json({ message: 'packageName, packagePrice, and billingCycle are required' });
    }

    try {
        const updatedUser = await userModel.activateUpgrade(userId, packageName, packagePrice, billingCycle);

        // Insert an approved upgrade_request for audit trail
        try {
            await db.query(
                `INSERT INTO upgrade_requests (user_id, user_name, user_email, current_plan, requested_plan, status)
                 VALUES ($1, $2, $3, $4, $5, 'approved')`,
                [userId, req.user.name, req.user.email, req.user.package_name || 'None', packageName]
            );
        } catch (auditErr) {
            console.warn('Could not write upgrade audit record:', auditErr.message);
        }

        res.json(updatedUser);
    } catch (error) {
        console.error('activateUpgrade error:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

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
    activateUpgrade,
    updatePackage,
};
