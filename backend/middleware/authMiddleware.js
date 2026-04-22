const jwt = require('jsonwebtoken');
const db = require('../config/db');

const protect = async (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      token = req.headers.authorization.split(' ')[1];

      const decoded = jwt.verify(token, process.env.JWT_SECRET || 'secret');

      // Add user to request (excluding password)
      const queryText = `
        SELECT u.id, u.name, u.email, u.role, u.company_type,
               p.name AS package_name, p.price_monthly AS package_price,
               u.package_status, u.purchase_date, u.subscription_end_date
        FROM users u
        LEFT JOIN packages p ON u.package_id = p.id
        WHERE u.id = $1
      `;
      const { rows } = await db.query(queryText, [decoded.id]);

      if (rows.length === 0) {
        return res.status(401).json({ message: 'Not authorized, user not found' });
      }

      req.user = rows[0];
      next();
    } catch (error) {
      console.error(error);
      res.status(401).json({ message: 'Not authorized, token failed' });
    }
  }

  if (!token) {
    res.status(401).json({ message: 'Not authorized, no token' });
  }
};

const admin = (req, res, next) => {
  if (req.user && req.user.role === 'admin') {
    next();
  } else {
    res.status(401).json({ message: 'Not authorized as an admin' });
  }
};

module.exports = { protect, admin };
