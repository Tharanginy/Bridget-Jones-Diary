const pool = require('../database');

async function getAllEntries() {
  const result = await pool.query('SELECT * FROM diary_entries ORDER BY date DESC');
  return result.rows;
}

async function getEntryById(id) {
  const result = await pool.query('SELECT * FROM diary_entries WHERE id = $1', [id]);
  return result.rows[0];
}

async function createEntry({ date, category, content }) {
  const result = await pool.query(
    'INSERT INTO diary_entries (date, category, content) VALUES ($1, $2, $3) RETURNING *',
    [date, category, content]
  );
  return result.rows[0];
}

async function updateEntry(id, { date, category, content }) {
  const result = await pool.query(
    'UPDATE diary_entries SET date = $1, category = $2, content = $3 WHERE id = $4 RETURNING *',
    [date, category, content, id]
  );
  return result.rows[0];
}

async function deleteEntry(id) {
  const result = await pool.query('DELETE FROM diary_entries WHERE id = $1 RETURNING *', [id]);
  return result.rows[0];
}

module.exports = {
  getAllEntries,
  getEntryById,
  createEntry,
  updateEntry,
  deleteEntry
};
