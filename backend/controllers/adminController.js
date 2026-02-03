const userModel = require('../models/userModel');
const upgradeRequestModel = require('../models/upgradeRequestModel');

const getUsers = async (req, res) => {
  try {
    const users = await userModel.getAllUsers();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

const confirmPackage = async (req, res) => {
  const { userId } = req.body;

  if (!userId) {
    return res.status(400).json({ message: 'User ID is required' });
  }

  try {
    const updatedUser = await userModel.updateUserPackageStatus(userId, 'confirmed');
    res.json(updatedUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedUser = await userModel.deleteUser(id);
    if (!deletedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json({ message: 'User deleted successfully', id: deletedUser.id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

const updateUserDetails = async (req, res) => {
  const { id } = req.params;
  const { name, email, company_type, package_name, package_price, package_status } = req.body;

  try {
    const updatedUser = await userModel.updateUserDetails(id, name, email, company_type, package_name, package_price, package_status);
    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(updatedUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

const updatePackage = async (req, res) => {
  const { userId, newPackage, newPrice } = req.body;

  if (!userId || !newPackage) {
    return res.status(400).json({ message: 'User ID and New Package are required' });
  }

  try {
    const updatedUser = await userModel.updateUserPackageByAdmin(userId, newPackage, newPrice);
    res.json(updatedUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

const getDashboardStats = async (req, res) => {
  try {
    const pendingUsers = await userModel.countPendingUsers();
    const pendingUpgrades = await upgradeRequestModel.countPendingRequests();

    res.json({
      pendingUsers,
      pendingUpgrades
    });
  } catch (error) {
    console.error('Error fetching dashboard stats:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  getUsers,
  confirmPackage,
  deleteUser,
  updateUserDetails,
  updatePackage,
  getDashboardStats
};
