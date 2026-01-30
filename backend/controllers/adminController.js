const userModel = require('../models/userModel');

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

module.exports = {
  getUsers,
  confirmPackage,
  deleteUser,
  updateUserDetails
};
