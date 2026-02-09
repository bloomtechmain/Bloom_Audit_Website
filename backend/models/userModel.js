const db = require('../config/db');

const createUsersTable = async () => {
  const queryText = `
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      name VARCHAR(100) NOT NULL,
      email VARCHAR(100) UNIQUE NOT NULL,
      password VARCHAR(255) NOT NULL,
      role VARCHAR(20) DEFAULT 'user',
      company_type VARCHAR(50),
      package_name VARCHAR(50),
      package_price VARCHAR(50),
      package_status VARCHAR(20) DEFAULT 'pending',
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `;

  try {
    await db.query(queryText);
    console.log('Users table checked/created');

    // Check if columns exist (for existing table updates)
    const checkColumn = async (columnName, dataType) => {
      try {
        await db.query(`ALTER TABLE users ADD COLUMN IF NOT EXISTS ${columnName} ${dataType}`);
      } catch (err) {
        console.log(`Column ${columnName} check error:`, err.message);
      }
    };

    await checkColumn('role', "VARCHAR(20) DEFAULT 'user'");
    await checkColumn('company_type', "VARCHAR(50)");
    await checkColumn('package_name', "VARCHAR(50)");
    await checkColumn('package_price', "VARCHAR(50)");
    await checkColumn('package_status', "VARCHAR(20) DEFAULT 'pending'");
    await checkColumn('package_start_date', "TIMESTAMP");
    await checkColumn('package_end_date', "TIMESTAMP");
    await checkColumn('expiry_warning_sent', "BOOLEAN DEFAULT FALSE");

    console.log('User schema verified');
  } catch (error) {
    console.error('Error creating users table:', error);
  }
};

const createUser = async (name, email, password, company_type = null, package_name = null, package_price = null) => {
  const queryText = `
    INSERT INTO users (name, email, password, company_type, package_name, package_price)
    VALUES ($1, $2, $3, $4, $5, $6)
    RETURNING id, name, email, role, created_at;
  `;
  const values = [name, email, password, company_type, package_name, package_price];
  const { rows } = await db.query(queryText, values);
  return rows[0];
};

const findUserByEmail = async (email) => {
  const queryText = 'SELECT * FROM users WHERE email = $1';
  const { rows } = await db.query(queryText, [email]);
  return rows[0];
};

const getAllUsers = async () => {
  const queryText = "SELECT id, name, email, role, company_type, package_name, package_price, package_status, created_at FROM users WHERE role != 'admin' ORDER BY created_at DESC";
  const { rows } = await db.query(queryText);
  return rows;
};

const deleteUser = async (userId) => {
  // First delete related upgrade requests manually (since no ON DELETE CASCADE)
  try {
    await db.query('DELETE FROM upgrade_requests WHERE user_id = $1', [userId]);
  } catch (err) {
    console.log(`Warning: Could not delete upgrade_requests for user ${userId}: ${err.message}`);
  }

  // Also delete messages manually to be safe (in case ON DELETE CASCADE is missing)
  try {
    await db.query('DELETE FROM messages WHERE user_id = $1', [userId]);
  } catch (err) {
    console.log(`Warning: Could not delete messages for user ${userId}: ${err.message}`);
  }

  // Then delete the user
  const queryText = 'DELETE FROM users WHERE id = $1 RETURNING id';
  const { rows } = await db.query(queryText, [userId]);
  return rows[0];
};

const updateUserDetails = async (userId, name, email, company_type, package_name, package_price, package_status) => {
  const queryText = `
    UPDATE users 
    SET name = $1, email = $2, company_type = $3, package_name = $4, package_price = $5, package_status = $6 
    WHERE id = $7 
    RETURNING *
  `;
  const values = [name, email, company_type, package_name, package_price, package_status, userId];
  const { rows } = await db.query(queryText, values);
  return rows[0];
};

const updateUserPackageStatus = async (userId, status) => {
  const queryText = 'UPDATE users SET package_status = $1 WHERE id = $2 RETURNING *';
  const { rows } = await db.query(queryText, [status, userId]);
  return rows[0];
};

const updateUserPackage = async (userId, packageName, packagePrice) => {
  const queryText = 'UPDATE users SET package_name = $1, package_price = $2, package_status = $3 WHERE id = $4 RETURNING *';
  const { rows } = await db.query(queryText, [packageName, packagePrice, 'pending', userId]);
  return rows[0];
};

const updateUserPackageByAdmin = async (userId, packageName, packagePrice, startDate, endDate) => {
  const queryText = `
    UPDATE users 
    SET package_name = $1, package_price = $2, package_status = $3, package_start_date = $4, package_end_date = $5, expiry_warning_sent = FALSE 
    WHERE id = $6 
    RETURNING *
  `;
  const { rows } = await db.query(queryText, [packageName, packagePrice, 'confirmed', startDate, endDate, userId]);
  return rows[0];
};

const confirmUserPackage = async (userId, startDate, endDate) => {
  const queryText = `
    UPDATE users 
    SET package_status = 'confirmed', package_start_date = $1, package_end_date = $2, expiry_warning_sent = FALSE
    WHERE id = $3
    RETURNING *
  `;
  const { rows } = await db.query(queryText, [startDate, endDate, userId]);
  return rows[0];
};

const countPendingUsers = async () => {
  const queryText = "SELECT COUNT(*) FROM users WHERE package_status = 'pending'";
  const { rows } = await db.query(queryText);
  return parseInt(rows[0].count);
};

const getExpiringUsers = async () => {
  // Get users whose package expires in 3 days (between 72 and 48 hours from now to be safe, or just < 3 days and not sent)
  // Simple logic: end_date < NOW + 3 days AND end_date > NOW AND warning_sent = false
  const queryText = `
    SELECT * FROM users 
    WHERE package_end_date < (NOW() + INTERVAL '3 days') 
    AND package_end_date > NOW() 
    AND package_status = 'confirmed' 
    AND expiry_warning_sent = FALSE
  `;
  const { rows } = await db.query(queryText);
  return rows;
};

const getExpiredUsers = async () => {
  const queryText = `
    SELECT * FROM users 
    WHERE package_end_date < NOW() 
    AND package_status = 'confirmed'
  `;
  const { rows } = await db.query(queryText);
  return rows;
};

const markUserExpired = async (userId) => {
  const queryText = "UPDATE users SET package_status = 'expired' WHERE id = $1 RETURNING *";
  const { rows } = await db.query(queryText, [userId]);
  return rows[0];
};

const markWarningSent = async (userId) => {
  const queryText = "UPDATE users SET expiry_warning_sent = TRUE WHERE id = $1 RETURNING *";
  const { rows } = await db.query(queryText, [userId]);
  return rows[0];
};

module.exports = {
  createUsersTable,
  createUser,
  findUserByEmail,
  getAllUsers,
  deleteUser,
  updateUserDetails,
  updateUserPackageStatus,
  updateUserPackage,
  updateUserPackageByAdmin,
  confirmUserPackage,
  countPendingUsers,
  getExpiringUsers,
  getExpiredUsers,
  markUserExpired,
  markWarningSent
};
