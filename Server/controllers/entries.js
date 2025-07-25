const Entry = require('../models/Entry');

// GET /diary
async function getAllEntries(req, res) {
  try {
    const entries = await Entry.getAllEntries();
    res.json(entries);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch entries' });
  }
}

// GET /diary/:id
async function getEntryById(req, res) {
  const id = req.params.id;
  try {
    const entry = await Entry.getEntryById(id);
    if (!entry) {
      return res.status(404).json({ error: 'Entry not found' });
    }
    res.json(entry);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch entry' });
  }
}

// POST /diary
async function createEntry(req, res) {
  const { date, category, content } = req.body;
  try {
    if (!date || !category || !content) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    const newEntry = await Entry.createEntry({ date, category, content });
    res.status(201).json(newEntry);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to create entry' });
  }
}

// PUT /diary/:id
async function updateEntry(req, res) {
  const id = req.params.id;
  const { date, category, content } = req.body;
  try {
    const updated = await Entry.updateEntry(id, { date, category, content });
    if (!updated) {
      return res.status(404).json({ error: 'Entry not found' });
    }
    res.json(updated);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to update entry' });
  }
}

// DELETE /diary/:id
async function deleteEntry(req, res) {
  const id = req.params.id;
  try {
    const deleted = await Entry.deleteEntry(id);
    if (!deleted) {
      return res.status(404).json({ error: 'Entry not found' });
    }
    res.json({ message: 'Entry deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to delete entry' });
  }
}

// GET /diary/search?date=...&month=...&year=...&category=...
async function searchEntries(req, res) {
  try {
    const results = await Entry.searchEntries(req.query);
    res.json(results);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to search entries' });
  }
}

module.exports = {
  getAllEntries,
  getEntryById,
  createEntry,
  updateEntry,
  deleteEntry,
  searchEntries
};
