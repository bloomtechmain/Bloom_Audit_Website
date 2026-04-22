const bcrypt = require('bcryptjs');
const db = require('./config/db');

const seedAdmin = async () => {
  const adminEmail = 'admin@gmail.com';
  const adminPassword = 'admin123';

  try {
    const { rows } = await db.query('SELECT * FROM users WHERE email = $1', [adminEmail]);

    if (rows.length === 0) {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(adminPassword, salt);

      await db.query(
        `INSERT INTO users (name, email, password_hash, role) VALUES ($1, $2, $3, $4)`,
        ['Admin', adminEmail, hashedPassword, 'admin']
      );
      console.log('Admin user created');
    } else {
      console.log('Admin user already exists');
    }
  } catch (error) {
    console.error('Error seeding admin:', error);
  }
};

module.exports = seedAdmin;
