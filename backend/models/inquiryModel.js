const db = require('../config/db');

const createInquiriesTable = async () => {
    const queryText = `
        CREATE TABLE IF NOT EXISTS enterprise_inquiries (
            id SERIAL PRIMARY KEY,
            name VARCHAR(100) NOT NULL,
            email VARCHAR(100) NOT NULL,
            phone VARCHAR(50) NOT NULL,
            company_name VARCHAR(100) NOT NULL,
            requirements TEXT NOT NULL,
            status VARCHAR(20) DEFAULT 'pending',
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
    `;
    try {
        await db.query(queryText);
        console.log('Enterprise Inquiries table checked/created');
    } catch (error) {
        console.error('Error creating inquiries table:', error);
    }
};

const createInquiry = async (data) => {
    const queryText = `
        INSERT INTO enterprise_inquiries (name, email, phone, company_name, requirements)
        VALUES ($1, $2, $3, $4, $5)
        RETURNING *;
    `;
    const values = [data.name, data.email, data.phone, data.companyName, data.requirements];
    const result = await db.query(queryText, values);
    return result.rows[0];
};

module.exports = {
    createInquiriesTable,
    createInquiry
};
