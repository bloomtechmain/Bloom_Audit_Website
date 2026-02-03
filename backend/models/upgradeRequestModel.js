const db = require('../config/db');

const createUpgradeRequestsTable = async () => {
    const queryText = `
        CREATE TABLE IF NOT EXISTS upgrade_requests (
            id SERIAL PRIMARY KEY,
            user_id INTEGER REFERENCES users(id),
            user_name VARCHAR(100) NOT NULL,
            user_email VARCHAR(100) NOT NULL,
            current_plan VARCHAR(50),
            requested_plan VARCHAR(50) NOT NULL,
            requirements TEXT,
            status VARCHAR(20) DEFAULT 'pending',
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
    `;
    try {
        await db.query(queryText);
        console.log('Upgrade Requests table checked/created');
    } catch (error) {
        console.error('Error creating upgrade requests table:', error);
    }
};

const createUpgradeRequest = async (data) => {
    const queryText = `
        INSERT INTO upgrade_requests (user_id, user_name, user_email, current_plan, requested_plan, requirements)
        VALUES ($1, $2, $3, $4, $5, $6)
        RETURNING *;
    `;
    const values = [
        data.userId,
        data.userName,
        data.userEmail,
        data.currentPlan || 'None',
        data.requestedPlan,
        data.requirements || ''
    ];
    const result = await db.query(queryText, values);
    return result.rows[0];
};

const getAllUpgradeRequests = async () => {
    const queryText = `SELECT * FROM upgrade_requests ORDER BY created_at DESC;`;
    const result = await db.query(queryText);
    return result.rows;
};

const updateUpgradeRequestStatus = async (id, status) => {
    const queryText = `
        UPDATE upgrade_requests
        SET status = $1
        WHERE id = $2
        RETURNING *;
    `;
    const result = await db.query(queryText, [status, id]);
    return result.rows[0];
};

const countPendingRequests = async () => {
    const queryText = "SELECT COUNT(*) FROM upgrade_requests WHERE status = 'pending'";
    const result = await db.query(queryText);
    return parseInt(result.rows[0].count);
};

module.exports = {
    createUpgradeRequestsTable,
    createUpgradeRequest,
    getAllUpgradeRequests,
    updateUpgradeRequestStatus,
    countPendingRequests
};
