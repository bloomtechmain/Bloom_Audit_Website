const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userModel = require('../models/userModel');

const register = async (req, res) => {
  const { name, email, password, company_type, package_name } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: 'Please provide all required fields' });
  }

  try {
    const existingUser = await userModel.findUserByEmail(email);
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await userModel.createUser(name, email, hashedPassword, company_type, package_name);

    // Assign Super Admin role in the shared ERP database so the user has
    // full access the first time they log into the ERP application.
    try {
      const db = require('../config/db');

      // Ensure the Super Admin role exists
      const roleResult = await db.query(`
        INSERT INTO public.roles (name, description, is_system_role)
        VALUES ('Super Admin', 'Full unrestricted system access', TRUE)
        ON CONFLICT (name) DO UPDATE SET name = EXCLUDED.name
        RETURNING id
      `);
      const superAdminRoleId = roleResult.rows[0].id;

      // Link the new user to Super Admin
      await db.query(`
        INSERT INTO public.user_roles (user_id, role_id)
        VALUES ($1, $2)
        ON CONFLICT (user_id, role_id) DO NOTHING
      `, [newUser.id, superAdminRoleId]);
    } catch (roleErr) {
      console.error('Warning: Could not assign Super Admin role to new user:', roleErr.message);
      // Non-fatal — ERP will provision on first login as fallback
    }

    const token = jwt.sign({ id: newUser.id, role: newUser.role }, process.env.JWT_SECRET || 'secret', {
      expiresIn: '30d',
    });

    res.status(201).json({
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      role: newUser.role,
      company_type: newUser.company_type,
      package_name: newUser.package_name,
      package_status: newUser.package_status || 'pending',
      token,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Please provide email and password' });
  }

  try {
    const user = await userModel.findUserByEmail(email);
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password_hash);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET || 'secret', {
      expiresIn: '30d',
    });

    res.json({
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      company_type: user.company_type,
      package_name: user.package_name,
      package_status: user.package_status,
      token,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

const getMe = async (req, res) => {
  // req.user is already set by protect middleware
  res.json(req.user);
};

const googleLogin = async (req, res) => {
  const { token } = req.body;

  if (!token) {
    return res.status(400).json({ message: 'No token provided' });
  }

  try {
    const googleRes = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
      headers: { Authorization: `Bearer ${token}` }
    });

    if (!googleRes.ok) {
      return res.status(400).json({ message: 'Invalid Google Token' });
    }

    const { email, name } = await googleRes.json();

    if (!email) {
      return res.status(400).json({ message: 'Google account has no email' });
    }

    let user = await userModel.findUserByEmail(email);

    if (!user) {
      // Return specific response to prompt registration on frontend
      return res.status(200).json({
        isNewUser: true,
        email,
        name,
        token, // Google access token to verify again during registration
        message: 'User not found. Please complete registration.'
      });
    }

    const jwtToken = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET || 'secret', {
      expiresIn: '30d',
    });

    res.json({
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      company_type: user.company_type,
      package_name: user.package_name,
      package_status: user.package_status || 'pending',
      token: jwtToken,
    });
  } catch (error) {
    console.error('Google Login Error:', error);
    res.status(500).json({ message: 'Server error during Google Login' });
  }
};

module.exports = {
  register,
  login,
  getMe,
  googleLogin
};
