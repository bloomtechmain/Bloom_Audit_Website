const db = require('../config/db');

const createUsersTable = async () => {
  // users table already exists on Railway — only ensure app-specific columns are present
  try {
    await db.query(`ALTER TABLE users ADD COLUMN IF NOT EXISTS company_type VARCHAR(50)`);
    console.log('User schema verified');
  } catch (error) {
    console.error('Error verifying users table:', error);
  }
};

const findPackageByName = async (packageName) => {
  if (!packageName) return null;
  const { rows } = await db.query('SELECT id FROM packages WHERE name = $1', [packageName]);
  return rows[0] ? rows[0].id : null;
};

const createUser = async (name, email, password, company_type = null, package_name = null) => {
  const packageId = await findPackageByName(package_name);
  const queryText = `
    INSERT INTO users (name, email, password_hash, company_type, package_id)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING id, name, email, role, created_at;
  `;
  const { rows } = await db.query(queryText, [name, email, password, company_type, packageId]);
  return rows[0];
};

const findUserByEmail = async (email) => {
  const queryText = `
    SELECT u.*, p.name AS package_name, p.price_monthly AS package_price
    FROM users u
    LEFT JOIN packages p ON u.package_id = p.id
    WHERE u.email = $1
  `;
  const { rows } = await db.query(queryText, [email]);
  return rows[0];
};

const getAllUsers = async () => {
  const queryText = `
    SELECT u.id, u.name, u.email, u.role, u.company_type,
           p.name AS package_name, p.price_monthly AS package_price,
           u.package_status, u.created_at
    FROM users u
    LEFT JOIN packages p ON u.package_id = p.id
    WHERE u.role != 'admin'
    ORDER BY u.created_at DESC
  `;
  const { rows } = await db.query(queryText);
  return rows;
};

const deleteUser = async (userId) => {
  try {
    await db.query('DELETE FROM upgrade_requests WHERE user_id = $1', [userId]);
  } catch (err) {
    console.log(`Warning: Could not delete upgrade_requests for user ${userId}: ${err.message}`);
  }
  try {
    await db.query('DELETE FROM messages WHERE user_id = $1', [userId]);
  } catch (err) {
    console.log(`Warning: Could not delete messages for user ${userId}: ${err.message}`);
  }
  const { rows } = await db.query('DELETE FROM users WHERE id = $1 RETURNING id', [userId]);
  return rows[0];
};

const updateUserDetails = async (userId, name, email, company_type, package_name, package_price, package_status) => {
  const packageId = await findPackageByName(package_name);
  const queryText = `
    UPDATE users
    SET name = $1, email = $2, company_type = $3, package_id = $4, package_status = $5
    WHERE id = $6
    RETURNING *
  `;
  const { rows } = await db.query(queryText, [name, email, company_type, packageId, package_status, userId]);
  return rows[0];
};

const updateUserPackageStatus = async (userId, status) => {
  const { rows } = await db.query(
    'UPDATE users SET package_status = $1 WHERE id = $2 RETURNING *',
    [status, userId]
  );
  return rows[0];
};

const updateUserPackage = async (userId, packageName) => {
  const packageId = await findPackageByName(packageName);
  const { rows } = await db.query(
    'UPDATE users SET package_id = $1, package_status = $2 WHERE id = $3 RETURNING *',
    [packageId, 'pending', userId]
  );
  return rows[0];
};

const updateUserPackageByAdmin = async (userId, packageName, packagePrice, startDate, endDate) => {
  const packageId = await findPackageByName(packageName);
  const queryText = `
    UPDATE users
    SET package_id = $1, package_status = $2, purchase_date = $3, subscription_end_date = $4
    WHERE id = $5
    RETURNING *
  `;
  const { rows } = await db.query(queryText, [packageId, 'confirmed', startDate, endDate, userId]);
  return rows[0];
};

const confirmUserPackage = async (userId, startDate, endDate) => {
  const queryText = `
    UPDATE users
    SET package_status = 'confirmed', purchase_date = $1, subscription_end_date = $2
    WHERE id = $3
    RETURNING *
  `;
  const { rows } = await db.query(queryText, [startDate, endDate, userId]);
  return rows[0];
};

const countPendingUsers = async () => {
  const { rows } = await db.query("SELECT COUNT(*) FROM users WHERE package_status = 'pending'");
  return parseInt(rows[0].count);
};

const getExpiringUsers = async () => {
  const queryText = `
    SELECT u.*, p.name AS package_name
    FROM users u
    LEFT JOIN packages p ON u.package_id = p.id
    WHERE u.subscription_end_date < (NOW() + INTERVAL '3 days')
    AND u.subscription_end_date > NOW()
    AND u.package_status = 'confirmed'
  `;
  const { rows } = await db.query(queryText);
  return rows;
};

const getExpiredUsers = async () => {
  const queryText = `
    SELECT * FROM users
    WHERE subscription_end_date < NOW()
    AND package_status = 'confirmed'
  `;
  const { rows } = await db.query(queryText);
  return rows;
};

const markUserExpired = async (userId) => {
  const { rows } = await db.query(
    "UPDATE users SET package_status = 'expired' WHERE id = $1 RETURNING *",
    [userId]
  );
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
};
