const db = require('../config/db');

const createMessagesTable = async () => {
  const queryText = `
    CREATE TABLE IF NOT EXISTS messages (
      id SERIAL PRIMARY KEY,
      user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
      user_name VARCHAR(255) NOT NULL,
      message TEXT NOT NULL,
      channel VARCHAR(50) DEFAULT 'general',
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `;
  try {
    await db.query(queryText);
    
    // Migration: Add channel column if it doesn't exist
    try {
      await db.query(`ALTER TABLE messages ADD COLUMN IF NOT EXISTS channel VARCHAR(50) DEFAULT 'general'`);
    } catch (migError) {
      console.log("Migration note: " + migError.message);
    }
    
    console.log("Messages table created/updated");
  } catch (error) {
    console.error("Error creating messages table:", error);
  }
};

const saveMessage = async (userId, userName, message, channel = 'general') => {
  const queryText = 'INSERT INTO messages (user_id, user_name, message, channel) VALUES ($1, $2, $3, $4) RETURNING *';
  const { rows } = await db.query(queryText, [userId, userName, message, channel]);
  return rows[0];
};

const getMessages = async (limit = 200) => {
  const queryText = 'SELECT * FROM messages ORDER BY created_at ASC LIMIT $1';
  const { rows } = await db.query(queryText, [limit]);
  return rows;
};

module.exports = { createMessagesTable, saveMessage, getMessages };
