const pool = require('../db');

async function getAllEntries() {
  const result = await pool.query('SELECT * FROM diary_entries ORDER BY date DESC');
  return result.rows;
}

async function createEntry({ date, category, content }) {
  const result = await pool.query(
    'INSERT INTO diary_entries (date, category, content) VALUES ($1, $2, $3) RETURNING *',
    [date, category, content]
  );
  return result.rows[0];
}

module.exports = { getAllEntries, createEntry };
