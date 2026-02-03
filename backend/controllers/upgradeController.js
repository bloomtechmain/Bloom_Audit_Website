const { createUpgradeRequest, getAllUpgradeRequests, updateUpgradeRequestStatus } = require('../models/upgradeRequestModel');

const submitUpgradeRequest = async (req, res) => {
    try {
        const { userId, userName, userEmail, currentPlan, requestedPlan, requirements } = req.body;

        if (!userId || !requestedPlan) {
            return res.status(400).json({ message: 'User ID and Requested Plan are required' });
        }

        const request = await createUpgradeRequest({
            userId,
            userName,
            userEmail,
            currentPlan,
            requestedPlan,
            requirements
        });

        res.status(201).json({ message: 'Upgrade request submitted successfully', request });
    } catch (error) {
        console.error('Upgrade request error:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

const getUpgradeRequests = async (req, res) => {
    try {
        const requests = await getAllUpgradeRequests();
        res.status(200).json(requests);
    } catch (error) {
        console.error('Get upgrade requests error:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

const handleUpgradeRequestStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;

        if (!status) {
            return res.status(400).json({ message: 'Status is required' });
        }

        const request = await updateUpgradeRequestStatus(id, status);
        res.status(200).json({ message: 'Status updated', request });
    } catch (error) {
        console.error('Update status error:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = { submitUpgradeRequest, getUpgradeRequests, handleUpgradeRequestStatus };
